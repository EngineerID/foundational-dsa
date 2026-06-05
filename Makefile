.PHONY: test test-java test-py test-js demo matrix matrix-check check-stubs check-parity

test: check-stubs test-java test-py test-js check-parity matrix-check

test-java:
	node tools/run-java-test.mjs

test-py:
	node tools/run-py-test.mjs

test-js:
	jest --config javascript/jest.config.js

demo:
	node tools/demo.mjs $(ITEM) $(LANG)

matrix:
	node tools/matrix.mjs

matrix-check:
	node tools/matrix.mjs --check --strict

check-stubs:
	node tools/check-stubs.mjs

check-parity:
	node tools/parity.mjs
