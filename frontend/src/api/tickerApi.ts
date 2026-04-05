import axios from "axios";

const API = "http://localhost:5000/api";

export const getTickers = () => axios.get(`${API}/tickers`);
export const getHistory = (symbol: string) =>
  axios.get(`${API}/history/${symbol}`);