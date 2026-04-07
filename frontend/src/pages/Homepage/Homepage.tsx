import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { fetchTickers, fetchHistory } from "../../services/api";
import { useWebSocket } from "../../hooks/useWebSocket";
import { TickerList } from "../../components/TickerList/TickerList";
import { PriceChart } from "../../components/PriceList/PriceList";

export const Homepage = () => {
  const [tickers, setTickers] = useState<string[]>([]);
  const [selected, setSelected] = useState("AAPL");
  const [history, setHistory] = useState([]);

  const prices = useWebSocket();

  useEffect(() => {
    fetchTickers().then(setTickers);
  }, []);

  useEffect(() => {
    fetchHistory(selected).then(setHistory);
  }, [selected]);

  return (
    <Flex h="100vh">
      <TickerList
        tickers={tickers}
        prices={prices}
        selected={selected}
        onSelect={setSelected}
      />
      <PriceChart ticker={selected} data={history} />
    </Flex>
  );
};
