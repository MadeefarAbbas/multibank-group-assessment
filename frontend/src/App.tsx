import { useEffect, useState } from "react";
import { useWebSocket } from "./hooks/useWebSocket";
import { useHistory } from "./hooks/useHistory";
import { TickerList } from "./components/TickerList";
import { Chart } from "./components/Chart";
import { MainLayout } from "./layouts/MainLayout";
import { ChartContainer } from "./components/ChartContainer";

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
    <MainLayout>
      <TickerList prices={prices} onSelect={setSelected} selected={selected} />
      
      <ChartContainer title={selected}>
        <Chart data={history} />
      </ChartContainer>
    </MainLayout>
  );
}

export default App;