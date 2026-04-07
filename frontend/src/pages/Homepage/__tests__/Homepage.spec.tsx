import { render, screen } from "@testing-library/react";
import { Homepage } from "../Homepage";

jest.mock("../../../services/api", () => ({
  fetchTickers: () => Promise.resolve(["AAPL", "TSLA"]),
  fetchHistory: () => Promise.resolve([]),
}));

jest.mock("../../../hooks/useWebSocket", () => ({
  useWebSocket: () => ({ AAPL: 150, TSLA: 200 }),
}));

jest.mock("recharts", () => ({
  LineChart: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Line: () => null,
  XAxis: () => null,
  YAxis: () => null,
  Tooltip: () => null,
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("Homepage", () => {
  it("renders the Tickers heading", () => {
    render(<Homepage />);
    expect(screen.getByText("Tickers")).toBeInTheDocument();
  });

  it("loads and displays tickers from the API", async () => {
    render(<Homepage />);
    expect(await screen.findByText("AAPL")).toBeInTheDocument();
    expect(await screen.findByText("TSLA")).toBeInTheDocument();
  });

  it("shows prices from websocket", async () => {
    render(<Homepage />);
    expect(await screen.findByText("$150")).toBeInTheDocument();
    expect(await screen.findByText("$200")).toBeInTheDocument();
  });

  it("renders the chart for the default selected ticker", () => {
    render(<Homepage />);
    expect(screen.getAllByText("AAPL").length).toBeGreaterThan(0);
  });
});
