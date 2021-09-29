import { replace } from "./urlUtils";

describe("replace", () => {
  it("should replace the '/' to be '-' ", () => {
    expect(replace("1/0", "/", "-")).toBe("1-0");
  });
});
