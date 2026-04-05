import { useEffect, useState } from "react";
import { getHistory } from "../api/tickerApi";

const cache: Record<string, any[]> = {};

export const useHistory = (symbol: string) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (cache[symbol]) {
      setData(cache[symbol]);
    } else {
      getHistory(symbol).then((res) => {
        cache[symbol] = res.data;
        setData(res.data);
      });
    }
  }, [symbol]);

  return data;
};