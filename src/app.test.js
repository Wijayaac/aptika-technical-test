const sum = require("./index");
describe("Test Sum function", () => {
  it("should return Hi Wijaya when invoked", () => {
    expect(sum(5, 2)).toBe(7);
  });
});
