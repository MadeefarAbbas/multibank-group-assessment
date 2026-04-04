const { WebSocketServer } = require("ws");
const { updatePrices, getPrices } = require("../services/market.service");

const initWebSocket = (server: any) => {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws: any) => {
    console.log("Client connected");

    const interval = setInterval(() => {
      updatePrices();
      ws.send(JSON.stringify(getPrices()));
    }, 1000);

    ws.on("close", () => clearInterval(interval));
  });
};

module.exports = { initWebSocket };