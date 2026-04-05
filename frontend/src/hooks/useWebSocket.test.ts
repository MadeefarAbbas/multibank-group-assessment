import { act, renderHook } from "@testing-library/react";
import { useWebSocket } from "./useWebSocket";

describe("useWebSocket", () => {
  it("connects to the backend socket, updates prices, and closes on cleanup", () => {
    let socketInstance: { onmessage?: (event: MessageEvent) => void; close: jest.Mock };
    const close = jest.fn();
    const mockWebSocket = jest.fn(() => {
      socketInstance = { close };
      return socketInstance;
    }) as unknown as typeof WebSocket;

    Object.defineProperty(globalThis, "WebSocket", {
      configurable: true,
      writable: true,
      value: mockWebSocket,
    });

    const { result, unmount } = renderHook(() => useWebSocket());

    expect(mockWebSocket).toHaveBeenCalledWith("ws://localhost:5000");

    act(() => {
      socketInstance.onmessage?.({
        data: JSON.stringify({ "BTC-USD": 61000 }),
      } as MessageEvent);
    });

    expect(result.current).toEqual({ "BTC-USD": 61000 });

    unmount();

    expect(close).toHaveBeenCalled();
  });
});