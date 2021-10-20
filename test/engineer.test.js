const Engineer = require("../lib/engineer");

test("Can set GitHub account via constructor", () => {
  const testValue = "GitHuber";
  const e = new Engineer("Man", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Man", 1, "test@test.com", "GitHuber");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHuber";
  const e = new Engineer("Man", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});