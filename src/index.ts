import express from "express";
import cors from "cors";
import http from "http";
import { initWebSocket } from "./websocket/wsServer";
import tickerRoutes from "./routes/tickers";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use("/api", tickerRoutes);

const server = http.createServer(app);
initWebSocket(server);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
