import { useEffect, useState } from "react";

const WS_URL = process.env.REACT_APP_WS_URL || "ws://localhost:3001";

export function useWebSocket() {
  const [prices, setPrices] = useState<Record<string, number>>({});

  useEffect(() => {
    const ws = new WebSocket(WS_URL);

    ws.onmessage = (event) => {
      setPrices(JSON.parse(event.data));
    };

    return () => ws.close();
  }, []);

  return prices;
}
