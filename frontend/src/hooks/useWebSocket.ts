import { useEffect, useState } from "react";

export const useWebSocket = () => {
  const [prices, setPrices] = useState<Record<string, number>>({});

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");

    ws.onmessage = (event) => {
      setPrices(JSON.parse(event.data));
    };

    return () => ws.close();
  }, []);

  return prices;
};