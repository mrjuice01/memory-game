import shuffleArr from "../utils/shuffle.js";

test("returns array", () => {
  expect(shuffleArr([1, 2, 3])).toBeInstanceOf(Array);
});

test("returns array length", () => {
  expect(shuffleArr([1, 2, 3])).toHaveLength(3);
});
