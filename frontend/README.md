# Frontend - MultiBank Group Assessment

A React + TypeScript frontend for a trading dashboard that displays live ticker prices and historical chart data.

## What this app does

- Connects to the backend WebSocket at `ws://localhost:5000` to receive live price updates
- Displays a list of ticker symbols and their current prices
- Lets the user select a ticker to view price history
- Uses `axios` to fetch ticker history from `http://localhost:5000/api/history/:symbol`
- Renders the history using `recharts`
- Stores a mock auth token in `localStorage` on app load
- Alerts the user when BTC price crosses `65000`

## Tech stack

- React 19
- TypeScript
- Create React App
- Axios
- Recharts
- Material UI (`@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`)

## Project structure

```
frontend/
├── public/
├── src/
│   ├── api/
│   │   └── tickerApi.ts       # REST API client for backend endpoints
│   ├── components/
│   │   ├── Chart.tsx          # Line chart for ticker history
│   │   └── TickerList.tsx     # Live ticker list and selection
│   ├── hooks/
│   │   ├── useHistory.ts      # Fetches and caches price history
│   │   └── useWebSocket.ts    # Connects to backend WebSocket for live prices
│   ├── App.tsx                # Main app layout and dashboard logic
│   ├── index.tsx
│   ├── App.css
│   └── ...
├── package.json
├── tsconfig.json
├── Dockerfile
└── README.md
```

## Requirements

- Node.js 18 or higher
- Backend server running at `http://localhost:5000`

## Installation

From the `frontend` folder:

```powershell
cd frontend
npm install
```

> On Windows, use `npm.cmd` when PowerShell blocks `npm.ps1` due to execution policy.

## Running the app

Start the development server:

```powershell
npm start
```

Then open `http://localhost:3000` in your browser.

## Available scripts

- `npm start` - Start the React development server
- `npm test` - Run the Create React App test runner
- `npm run build` - Build the production-ready app into `build/`
- `npm run eject` - Eject CRA configuration (one-way)

## Backend dependency

This frontend depends on the backend service for:

- `ws://localhost:5000` for live WebSocket price updates
- `http://localhost:5000/api` for ticker history and symbol endpoints

If the backend is not running, live prices and historical chart data will not work.

## Docker

Build the frontend Docker image:

```bash
docker build -t multibank-frontend .
```

Run the container:

```bash
docker run -p 3000:3000 multibank-frontend
```

## Notes

- Mock auth token is stored in `localStorage` on app load.
- BTC threshold alert triggers when `BTC-USD` exceeds `65000`.

## Troubleshooting

If `npm` is blocked by PowerShell execution policy, use:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
npm.cmd start
```

If port `3000` is already in use, stop the conflicting service or run on a different port.
