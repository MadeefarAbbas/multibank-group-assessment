const express = require("express");
const { getTickers } = require("../services/market.service");

const router = express.Router();

router.get("/tickers", (_: any, res: any) => {
  res.json(getTickers());
});

router.get("/history/:symbol", (req: any, res: any) => {
  const history = Array.from({ length: 50 }).map((_, i) => ({
    price: 100 + Math.random() * 50,
    timestamp: Date.now() - i * 60000,
  }));

  res.json(history);
});

module.exports = router;