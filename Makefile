.PHONY: test test-ci test-java test-py test-js demo matrix matrix-check inventory inventory-check check-docs-links check-item-doc-complexity check-stubs check-parity check-edge-themes check-ci-policy lint bench

test: check-docs-links check-readme-index check-item-doc-complexity check-stubs test-java test-py test-js check-parity matrix-check

test-ci:
	npm run test:ci

lint:
	npm run lint

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

inventory:
	node tools/inventory.mjs

inventory-check:
	node tools/inventory.mjs --check

check-docs-links:
	node tools/check-docs-links.mjs

check-readme-index:
	node tools/check-readme-index.mjs

check-item-doc-complexity:
	node tools/check-item-doc-complexity.mjs

check-stubs:
	node tools/check-stubs.mjs

check-parity:
	node tools/parity.mjs

check-edge-themes:
	npm run check:edge-themes

check-ci-policy:
	npm run check:ci-policy

check-readme-complexity:
	npm run check:readme-complexity

check-golden-parity:
	npm run check:golden-parity

check-catalog-items:
	npm run check:catalog-items

bench:
	npm run bench
