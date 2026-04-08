# Trading Dashboard

Real-time trading dashboard with live ticker prices and interactive charts.

## Tech Stack

- **Backend:** Node.js, TypeScript, Express, WebSocket
- **Frontend:** React, TypeScript, Chakra UI, Recharts
- **UI Library:** Chakra UI v3

## Getting Started

### Prerequisites

- Node.js 18+
- Docker Desktop

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

### Run with Docker

```bash
docker compose up --build
```

- Frontend: http://localhost:3000
- Backend: http://localhost:3001

**Stop:**

```bash
docker compose down
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

Test coverage:

- Homepage component render test
- PriceList component render test
- TickerList component render test
