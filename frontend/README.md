# Trading Dashboard

Real-time trading dashboard with live ticker prices and interactive charts.

## Tech Stack

- **Backend:** Node.js, TypeScript, Express, WebSocket
- **Frontend:** React, TypeScript, Chakra UI, Recharts

## Getting Started

### Prerequisites

- Node.js 18+

### Run Locally

**Backend:**

```bash
cd backend
npm install
npm run dev
```

**Frontend:**

```bash
cd frontend
npm install
npm start
```

## API Endpoints

| Method | Endpoint                       | Description        |
| ------ | ------------------------------ | ------------------ |
| GET    | `/api/tickers`                 | List all tickers   |
| GET    | `/api/prices`                  | Current prices     |
| GET    | `/api/tickers/:ticker/history` | Historical data    |
| WS     | `ws://localhost:3001`          | Live price updates |

## Assumptions & Trade-offs

- Historical data is simulated
- Authentication is not implemented
- Redis caching replaced with in-memory caching for simplicity

## Running Tests

```bash
cd frontend
npm test
```
