import { WebSocketServer, WebSocket } from "ws";
import http from "http";
import { getAllPrices } from "../services/priceEngine";

export function initWebSocket(server: http.Server) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws: WebSocket) => {
    console.log("Client connected");

    const interval = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(getAllPrices()));
      }
    }, 1000);

    ws.on("close", () => {
      console.log("Client disconnected");
      clearInterval(interval);
    });
  });
}
