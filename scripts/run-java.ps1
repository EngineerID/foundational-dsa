$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$buildDir = Join-Path $root "build/java"
$searchRoot = Join-Path $root "Algorithms"

if (-not (Get-Command javac -ErrorAction SilentlyContinue)) {
  Write-Error "javac not found. Install JDK 11+ and add it to PATH."
  exit 1
}

New-Item -ItemType Directory -Force -Path $buildDir | Out-Null

$javaFiles = Get-ChildItem -Path $searchRoot -Recurse -Filter "*.java"
if (-not $javaFiles) {
  Write-Host "No Java files found under Algorithms/."
  exit 0
}

Write-Host "Compiling Java files..."
$sourcePaths = ($javaFiles | ForEach-Object { "`"$($_.FullName)`"" }) -join " "
Invoke-Expression "javac -d `"$buildDir`" $sourcePaths"

$mainClasses = @()
foreach ($file in $javaFiles) {
  $content = Get-Content $file.FullName -Raw
  if ($content -match 'public\s+static\s+void\s+main\s*\(') {
    $className = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    $mainClasses += $className
  }
}

if ($mainClasses.Count -eq 0) {
  Write-Host "Compiled successfully. No classes with main() to run."
  exit 0
}

$failed = @()
foreach ($class in ($mainClasses | Select-Object -Unique)) {
  Write-Host "`n=== Running $class ===" -ForegroundColor Cyan
  Push-Location $buildDir
  try {
    java $class
    if ($LASTEXITCODE -ne 0) { $failed += $class }
  } catch {
    $failed += $class
  } finally {
    Pop-Location
  }
}

if ($failed.Count -gt 0) {
  Write-Host "`nFailed to run:" -ForegroundColor Red
  $failed | ForEach-Object { Write-Host "  $_" }
  exit 1
}

Write-Host "`nJava runner finished." -ForegroundColor Green
