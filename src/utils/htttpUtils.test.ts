import { httpPost } from "./httpUtils";
import { LOGIN_BASE_URL, WRONGLOGIN_BASE_URL } from "../config/base";

describe("httpPost", () => {
  const values = {
    email: "test@163.com",
    password: "12345678HIJij"
  };

  it("should be response valid data from the server when the request address is correct", async () => {
    const result = await httpPost(LOGIN_BASE_URL, values);
    expect(result).toEqual('{data: "submit success"}');
  });

  it("should include error information when fake end point address is incorrect", async () => {
    const result = await httpPost(WRONGLOGIN_BASE_URL, values);
    expect(result).toEqual(null);
  });
});
