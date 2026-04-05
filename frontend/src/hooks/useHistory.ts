import { useEffect, useState } from "react";
import { getHistory } from "../api/tickerApi";

const cache: Record<string, any[]> = {};

export const useHistory = (symbol: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     setLoading(true);

    if (cache[symbol]) {
      setData(cache[symbol]);
      setLoading(false);
    } else {
      getHistory(symbol).then((res) => {
        cache[symbol] = res.data;
        setData(res.data);
        setLoading(false);
      });
    }
  }, [symbol]);

  return data;
};