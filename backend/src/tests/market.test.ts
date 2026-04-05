const { updatePrices, getPrices } = require("../services/market.service");

test("prices should update", () => {
  const before = { ...getPrices() };
  updatePrices();
  const after = getPrices();

  expect(before).not.toEqual(after);
});
