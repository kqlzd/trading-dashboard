import { render, screen } from "@testing-library/react";
import { PriceChart } from "../PriceList";

jest.mock("recharts", () => ({
  LineChart: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="line-chart">{children}</div>
  ),
  Line: () => null,
  XAxis: () => null,
  YAxis: () => null,
  Tooltip: () => null,
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="responsive-container">{children}</div>
  ),
}));

const mockData = [
  { time: "2024-01-01T10:00:00Z", price: 150 },
  { time: "2024-01-01T11:00:00Z", price: 155 },
];

describe("PriceChart", () => {
  it("renders the ticker name", () => {
    render(<PriceChart ticker="AAPL" data={mockData} />);
    expect(screen.getByText("AAPL")).toBeInTheDocument();
  });

  it("renders chart with data", () => {
    render(<PriceChart ticker="AAPL" data={mockData} />);
    expect(screen.getByTestId("line-chart")).toBeInTheDocument();
  });

  it("renders with empty data", () => {
    render(<PriceChart ticker="TSLA" data={[]} />);
    expect(screen.getByText("TSLA")).toBeInTheDocument();
    expect(screen.getByTestId("line-chart")).toBeInTheDocument();
  });
});
