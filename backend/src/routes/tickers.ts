import { Router } from "express";
import {
  TICKERS,
  getAllPrices,
  getHistoricalData,
} from "../services/priceEngine";

const router = Router();

router.get("/tickers", (req, res) => {
  res.json(TICKERS);
});

router.get("/tickers/:ticker/history", (req, res) => {
  const { ticker } = req.params;
  if (!TICKERS.includes(ticker)) {
    return res.status(404).json({ error: "Ticker not found" });
  }
  res.json(getHistoricalData(ticker));
});

router.get("/prices", (req, res) => {
  res.json(getAllPrices());
});

export default router;
