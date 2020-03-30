import "jest";
import { example } from "./example";

describe("Example", () => {
  test("Should add one", () => {
    expect(example(8)).toEqual(9);
  });
});

