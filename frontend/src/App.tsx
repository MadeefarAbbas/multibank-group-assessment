import { useEffect, useState } from "react";
import { useWebSocket } from "./hooks/useWebSocket";
import { useHistory } from "./hooks/useHistory";
import { TickerList } from "./components/TickerList";
import { Chart } from "./components/Chart";

function App() {
  const prices = useWebSocket();
  const [selected, setSelected] = useState("BTC-USD");

  const history = useHistory(selected);

  // Mock Auth
  useEffect(() => {
    localStorage.setItem("token", "mock-token");
  }, []);

  useEffect(() => {
    if (prices["BTC-USD"]) {
      const price = prices["BTC-USD"];
      if (price > 65000) {
        alert("BTC crossed threshold!");
      }
    }
  }, [prices]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Trading Dashboard</h1>

      <TickerList prices={prices} onSelect={setSelected} />

      <h2>{selected}</h2>

      <Chart data={history} />
    </div>
  );
}

export default App;