import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "./slugify.ts";

test("strips punctuation", () => {
  assert.equal(slugify("Hello, World!!"), "hello-world");
});

test("collapses repeated dashes and whitespace", () => {
  assert.equal(slugify("a -- b   c---d"), "a-b-c-d");
});

test("trims leading and trailing dashes", () => {
  assert.equal(slugify("--Hello World--"), "hello-world");
  assert.equal(slugify("  !Hello! "), "hello");
});

test("removes diacritics", () => {
  assert.equal(slugify("Café Déjà Vu"), "cafe-deja-vu");
});

test("returns empty string for punctuation-only input", () => {
  assert.equal(slugify("?!...---"), "");
});
