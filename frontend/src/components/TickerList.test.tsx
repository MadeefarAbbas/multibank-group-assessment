import { fireEvent, render, screen } from "@testing-library/react";
import { TickerList } from "./TickerList";

describe("TickerList", () => {
  it("renders ticker symbols and prices", () => {
    render(
      <TickerList
        prices={{ "BTC-USD": 61000, "ETH-USD": 3200 }}
        onSelect={jest.fn()}
        selected="BTC-USD"
      />
    );

    expect(screen.getByText("BTC-USD")).toBeInTheDocument();
    expect(screen.getByText("ETH-USD")).toBeInTheDocument();
    expect(screen.getByText("61000.00")).toBeInTheDocument();
    expect(screen.getByText("3200.00")).toBeInTheDocument();
  });

  it("calls onSelect when a ticker card is clicked", () => {
    const onSelect = jest.fn();

    render(
      <TickerList
        prices={{ "BTC-USD": 61000 }}
        onSelect={onSelect}
        selected="BTC-USD"
      />
    );

    fireEvent.click(screen.getByText("BTC-USD"));

    expect(onSelect).toHaveBeenCalledWith("BTC-USD");
  });
});