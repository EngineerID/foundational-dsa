# Local mutation testing (not CI)

Optional spot checks for core modules. Do not add these to GitHub Actions.

## Python (`mutmut`)

```bash
python3 -m pip install --user mutmut
mutmut run --paths-to-mutate python/dsa/strings/kmp.py \
  --tests-dir python/tests/strings \
  --runner "python -m pytest python/tests/strings/test_kmp.py -q"
mutmut results
```

## JavaScript (Stryker)

Stryker is not wired in this repo. For a manual spot check, temporarily break a golden expectation in `tools/kmp-goldens.json` and confirm `npm run test:js` fails.
