import { renderHook, waitFor } from "@testing-library/react";
import { useHistory } from "./useHistory";
import { getHistory } from "../api/tickerApi";

jest.mock("../api/tickerApi");

const mockGetHistory = getHistory as jest.MockedFunction<typeof getHistory>;

describe("useHistory", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("fetches and returns history for a symbol", async () => {
    mockGetHistory.mockResolvedValue({ data: [{ price: 123, timestamp: 1 }] } as never);

    const { result } = renderHook(() => useHistory("BTC-USD-hook-test"));

    await waitFor(() => {
      expect(result.current).toEqual([{ price: 123, timestamp: 1 }]);
    });
    expect(mockGetHistory).toHaveBeenCalledWith("BTC-USD-hook-test");
  });

  it("reuses cached history for the same symbol", async () => {
    mockGetHistory.mockResolvedValue({ data: [{ price: 456, timestamp: 2 }] } as never);

    const first = renderHook(() => useHistory("ETH-USD-hook-test"));

    await waitFor(() => {
      expect(first.result.current).toEqual([{ price: 456, timestamp: 2 }]);
    });

    const second = renderHook(() => useHistory("ETH-USD-hook-test"));

    await waitFor(() => {
      expect(second.result.current).toEqual([{ price: 456, timestamp: 2 }]);
    });
    expect(mockGetHistory).toHaveBeenCalledTimes(1);
  });
});