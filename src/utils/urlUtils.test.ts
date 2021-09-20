import { replace } from "./urlUtils";

test("replace function can work well", () => {
  expect(replace("1/0", "/", "-")).toBe("1-0");
});
