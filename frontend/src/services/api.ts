import { BASE_URL } from "./const";

export async function fetchTickers(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/tickers`);
  return res.json();
}

export async function fetchHistory(ticker: string) {
  const res = await fetch(`${BASE_URL}/tickers/${ticker}/history`);
  return res.json();
}
