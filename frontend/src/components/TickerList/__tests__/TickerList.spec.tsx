import { render, screen, fireEvent } from "@testing-library/react";
import { TickerList } from "../TickerList";

const mockOnSelect = jest.fn();

const defaultProps = {
  tickers: ["AAPL", "TSLA", "GOOGL"],
  prices: { AAPL: 150.5, TSLA: 200 },
  selected: "AAPL",
  onSelect: mockOnSelect,
};

beforeEach(() => mockOnSelect.mockClear());

describe("TickerList", () => {
  it("renders Tickers heading", () => {
    render(<TickerList {...defaultProps} />);
    expect(screen.getByText("Tickers")).toBeInTheDocument();
  });

  it("renders all ticker names", () => {
    render(<TickerList {...defaultProps} />);
    expect(screen.getByText("AAPL")).toBeInTheDocument();
    expect(screen.getByText("TSLA")).toBeInTheDocument();
    expect(screen.getByText("GOOGL")).toBeInTheDocument();
  });

  it("displays price for tickers that have a price", () => {
    render(<TickerList {...defaultProps} />);
    expect(screen.getByText("$150.5")).toBeInTheDocument();
    expect(screen.getByText("$200")).toBeInTheDocument();
  });

  it("displays '...' for tickers without a price", () => {
    render(<TickerList {...defaultProps} />);
    expect(screen.getByText("$...")).toBeInTheDocument();
  });

  it("calls onSelect with the correct ticker when clicked", () => {
    render(<TickerList {...defaultProps} />);
    fireEvent.click(screen.getByText("TSLA"));
    expect(mockOnSelect).toHaveBeenCalledWith("TSLA");
  });

  it("renders empty list when no tickers provided", () => {
    render(<TickerList {...defaultProps} tickers={[]} />);
    expect(screen.getByText("Tickers")).toBeInTheDocument();
    expect(screen.queryByText("AAPL")).not.toBeInTheDocument();
  });
});
