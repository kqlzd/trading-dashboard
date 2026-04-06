import { useEffect, useState } from "react";

export function useWebSocket() {
  const [prices, setPrices] = useState<Record<string, number>>({});

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001");

    ws.onmessage = (event) => {
      setPrices(JSON.parse(event.data));
    };

    return () => ws.close();
  }, []);

  return prices;
}
