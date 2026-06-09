import { useEffect, useState } from "react";
import { getStockData } from "../services/stocks";

const SYMBOLS = [
  "NVDA",
  "TSLA",
  "AAPL",
];

export default function useStocks() {
  const [stocks, setStocks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  loadStocks();

  const interval = setInterval(() => {
    loadStocks();
  }, 60000);

  return () => clearInterval(interval);
}, []);

  const loadStocks = async () => {
    try {
      const results = await Promise.all(
        SYMBOLS.map((symbol) =>
          getStockData(symbol)
        )
      );

      setStocks(results);
    } finally {
      setLoading(false);
    }
  };

  return {
    stocks,
    loading,
    refresh: loadStocks,
  };
}