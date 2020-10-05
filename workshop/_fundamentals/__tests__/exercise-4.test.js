const getValues = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(["chris", "liv", "dave"]);
  // add more tests here...
  expect(
    getValues(
      [
        { name: "jared", age: 25 },
        { name: "nick", age: 50 },
        { name: "john", age: 23 },
      ],
      "name"
    )
  ).toStrictEqual(["jared", "nick", "john"]);
  expect(
    getValues(
      [
        { name: "paul", age: 19 },
        { name: "chris", age: 41 },
        { name: "grace", age: 21 },
      ],
      "name"
    )
  ).toStrictEqual(["paul", "chris", "grace"]);
});
