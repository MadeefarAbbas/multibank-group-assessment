import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
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
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          display: "grid",
          gap: { xs: 2, md: 3 },
        }}
      >
        <TickerList prices={prices} onSelect={setSelected} selected={selected} />

        <ChartContainer title={selected}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            Recent market history for the selected symbol.
          </Typography>
          <Chart data={history} />
        </ChartContainer>
      </Box>
    </MainLayout>
  );
}

export default App;