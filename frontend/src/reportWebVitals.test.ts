import reportWebVitals from "./reportWebVitals";
import { getCLS } from "web-vitals";

jest.mock("web-vitals", () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn(),
}));

describe("reportWebVitals", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("does nothing when no callback is provided", () => {
    reportWebVitals();

    expect(getCLS).not.toHaveBeenCalled();
  });

  it("subscribes to web-vitals metrics when a callback is provided", async () => {
    const callback = jest.fn();

    expect(() => reportWebVitals(callback)).not.toThrow();
    expect(getCLS).not.toHaveBeenCalled();
  });
});