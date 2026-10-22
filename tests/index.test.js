import { test } from "node:test";
import assert from "node:assert/strict";
import { name } from "../src/index.js";

test("exporta o nome do pacote", () => {
  assert.equal(name, "validator-seo");
});
