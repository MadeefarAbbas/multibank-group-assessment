import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { useWebSocket } from "./hooks/useWebSocket";
import { useHistory } from "./hooks/useHistory";

jest.mock("./hooks/useWebSocket");
jest.mock("./hooks/useHistory");
jest.mock("./layouts/MainLayout", () => ({
  MainLayout: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));
jest.mock("./components/ChartContainer", () => ({
  ChartContainer: ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  ),
}));
jest.mock("./components/Chart", () => ({
  Chart: ({ data }: { data: Array<{ price: number }> }) => (
    <div data-testid="chart">{data.length}</div>
  ),
}));
jest.mock("./components/TickerList", () => ({
  TickerList: ({ onSelect, selected }: { onSelect: (symbol: string) => void; selected: string }) => (
    <div>
      <span data-testid="selected-symbol">{selected}</span>
      <button onClick={() => onSelect("ETH-USD")}>Choose ETH</button>
    </div>
  ),
}));

const mockUseWebSocket = useWebSocket as jest.MockedFunction<typeof useWebSocket>;
const mockUseHistory = useHistory as jest.MockedFunction<typeof useHistory>;

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    mockUseWebSocket.mockReturnValue({ "BTC-USD": 60000, "ETH-USD": 3000 });
    mockUseHistory.mockImplementation((symbol: string) => [{ price: symbol === "BTC-USD" ? 1 : 2 }]);
  });

  it("stores the mock token and renders the selected chart title", () => {
    render(<App />);

    expect(localStorage.getItem("token")).toBe("mock-token");
    expect(screen.getByTestId("selected-symbol")).toHaveTextContent("BTC-USD");
    expect(screen.getByRole("heading", { name: "BTC-USD" })).toBeInTheDocument();
  });

  it("updates the selected symbol when a ticker is chosen", async () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Choose ETH" }));

    await waitFor(() => {
      expect(screen.getByTestId("selected-symbol")).toHaveTextContent("ETH-USD");
    });
    expect(mockUseHistory).toHaveBeenLastCalledWith("ETH-USD");
  });

  it("alerts when BTC crosses the threshold", () => {
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => undefined);
    mockUseWebSocket.mockReturnValue({ "BTC-USD": 66000 });

    render(<App />);

    expect(alertSpy).toHaveBeenCalledWith("BTC crossed threshold!");

    alertSpy.mockRestore();
  });
});
