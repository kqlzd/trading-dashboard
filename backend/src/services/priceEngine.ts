export const TICKERS = ["AAPL", "TSLA", "BTC-USD", "GOOGL", "AMZN"];

const prices: Record<string, number> = {
  AAPL: 180,
  TSLA: 250,
  "BTC-USD": 42000,
  GOOGL: 140,
  AMZN: 175,
};

export function getPrice(ticker: string): number {
  const change = (Math.random() - 0.5) * 2;
  prices[ticker] = parseFloat((prices[ticker] * (1 + change / 100)).toFixed(2));
  return prices[ticker];
}

export function getAllPrices(): Record<string, number> {
  const result: Record<string, number> = {};
  TICKERS.forEach((t) => {
    result[t] = getPrice(t);
  });
  return result;
}

export function getHistoricalData(
  ticker: string,
): { time: string; price: number }[] {
  const base = prices[ticker] || 100;
  return Array.from({ length: 20 }, (_, i) => ({
    time: new Date(Date.now() - (20 - i) * 60000).toISOString(),
    price: parseFloat((base * (1 + (Math.random() - 0.5) * 0.1)).toFixed(2)),
  }));
}
