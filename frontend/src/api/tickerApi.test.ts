import axios from "axios";
import { getHistory, getTickers } from "./tickerApi";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("tickerApi", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedAxios.get.mockResolvedValue({ data: [] });
  });

  it("requests tickers from the backend API", async () => {
    await getTickers();

    expect(mockedAxios.get).toHaveBeenCalledWith("http://localhost:5000/api/tickers");
  });

  it("requests symbol history from the backend API", async () => {
    await getHistory("BTC-USD");

    expect(mockedAxios.get).toHaveBeenCalledWith("http://localhost:5000/api/history/BTC-USD");
  });
});