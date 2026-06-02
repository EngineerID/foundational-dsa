$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$python = if (Get-Command py -ErrorAction SilentlyContinue) { "py" } else { "python" }

$testFiles = Get-ChildItem -Path $root -Recurse -Include "unit_test.py", "unit-test.py" |
  Where-Object { $_.FullName -notmatch "\\node_modules\\" }

if (-not $testFiles) {
  Write-Error "No Python test files found."
  exit 1
}

$failed = @()

foreach ($file in $testFiles) {
  $dir = $file.DirectoryName
  $name = $file.Name
  Write-Host "`n=== $name ($dir) ===" -ForegroundColor Cyan
  Push-Location $dir
  try {
    & $python -m unittest $name -v
    $exitCode = $LASTEXITCODE
    if ($exitCode -eq 5) {
      Write-Host "No unittest cases; running as script..." -ForegroundColor Yellow
      & $python $name
      $exitCode = $LASTEXITCODE
    }
    if ($exitCode -ne 0) { $failed += $file.FullName }
  } catch {
    $failed += $file.FullName
  } finally {
    Pop-Location
  }
}

if ($failed.Count -gt 0) {
  Write-Host "`nFailed:" -ForegroundColor Red
  $failed | ForEach-Object { Write-Host "  $_" }
  exit 1
}

Write-Host "`nAll Python tests passed." -ForegroundColor Green
