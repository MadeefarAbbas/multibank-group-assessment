const express = require("express");
const http = require("http");
const cors = require("cors");
const routes = require("./routes/ticker.routes");
const { initWebSocket } = require("./websocket/ws");

const app = express();
app.use(cors());
app.use("/api", routes);

const server = http.createServer(app);
initWebSocket(server);

server.listen(5000, () => {
  console.log("Backend running on port 5000");
});