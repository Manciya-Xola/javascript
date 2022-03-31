const result = require("./exercise-4");

describe("Exercise 4", () => {
  const person = {
    lastName: "Scott",
    position: "Regional Manager",
    age: 40,
    location: {
      coordinates: [104, 200],
    },
  };
  it("Destructure an object", () => {
    expect(result).toStrictEqual(person);
  });
});