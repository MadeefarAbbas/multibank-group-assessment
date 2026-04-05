import { useState } from "react";
import { useWebSocket } from "./hooks/useWebSocket";
import { useHistory } from "./hooks/useHistory";
import { TickerList } from "./components/TickerList";
import { Chart } from "./components/Chart";

function App() {
  const prices = useWebSocket();
  const [selected, setSelected] = useState("BTC-USD");

  const history = useHistory(selected);

  return (
    <div>
      <h1>Trading Dashboard</h1>

      <TickerList prices={prices} onSelect={setSelected} />

      <Chart data={history} />
    </div>
  );
}

export default App;