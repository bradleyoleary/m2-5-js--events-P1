const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  expect(letterCount(["montreal", "canada"])).toBe(14);
  expect(letterCount(["bradley", "oleary"])).toBe(13);
  // add more tests here...
});
