const assert = require("node:assert/strict");
const fs = require("node:fs");
const test = require("node:test");

const generated = fs.readFileSync("src/data/course-content-es.generated.ts", "utf8");
const language = fs.readFileSync("src/lib/language.ts", "utf8");
const progress = fs.readFileSync("src/lib/local-progress.ts", "utf8");

test("Spanish localization covers all eight modules and forty lessons", () => {
  const moduleBlock = generated.match(/moduleLocalizationEs = ([\s\S]*?) as const;/)?.[1] ?? "";
  const lessonBlock = generated.match(/lessonLocalizationEs = ([\s\S]*?) as const;/)?.[1] ?? "";
  assert.equal((moduleBlock.match(/[0-9a-f-]{36}/g) ?? []).length, 8);
  assert.equal((lessonBlock.match(/[0-9a-f-]{36}-lesson-\d/g) ?? []).length, 40);
});

test("ES and EN use query-driven launches and one shared progress identity", () => {
  assert.match(language, /hubLang/);
  assert.match(language, /import\.meta\.env\.BASE_URL/);
  assert.match(language, /"es" \| "en"/);
  assert.equal((progress.match(/aeroskills-anonymous-progress-v1/g) ?? []).length, 1);
  assert.doesNotMatch(progress, /hubLang|language/i);
});

test("generated Spanish content keeps neutral identifiers and contains Spanish learning text", () => {
  assert.match(generated, /Fundamentos del rendimiento ambiental de la aviación/);
  assert.match(generated, /Objetivos de aprendizaje/);
  assert.match(generated, /Comprobación de conocimientos/);
  assert.doesNotMatch(generated, /deSAFío|anticonceptivos|inmedIATAs/);
});
