// src/services/market.service.ts
// Simulates or connects to a mock market data feed (e.g., WebSocket or polling)
// Streams real-time price updates for a set of tickers (e.g., AAPL, TSLA, BTC-USD)

export type PriceMap = Record<string, number>;

const TICKERS = ["BTC-USD", "ETH-USD", "AAPL"];

let prices: PriceMap = {
  "BTC-USD": 60000,
  "ETH-USD": 3000,
  AAPL: 180,
};

const getTickers = () => TICKERS;

const getPrices = () => prices;

const updatePrices = () => {
  Object.keys(prices).forEach((symbol) => {
    const change = (Math.random() - 0.5) * 100;
    prices[symbol]! += change;
  });
};

module.exports = { getTickers, getPrices, updatePrices };