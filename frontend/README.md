# Frontend - MultiBank Group Assessment

This frontend is a React + TypeScript trading dashboard that connects to the backend API and WebSocket server to show live prices, historical charts, and a simple mock-authenticated user flow.

## Features

- Mock login screen with default credentials `admin / admin`
- Post-login loading screen before the dashboard renders
- Live ticker updates over WebSocket from `ws://localhost:5000`
- Historical price fetches from `http://localhost:5000/api/history/:symbol`
- Ticker selection with highlighted selected card state
- BTC threshold alert when `BTC-USD` moves above `65000`
- Material UI based layout and cards
- Recharts line chart for price history

## Tech Stack

- React 19
- TypeScript
- Create React App
- Material UI 7
- Axios
- Recharts
- React Testing Library
- Jest DOM

## Credentials

Use the following mock login credentials:

- Username: `admin`
- Password: `admin`

The login form is prefilled with these values.

## Project Structure

```text
frontend/
├── public/
├── src/
│   ├── api/
│   │   ├── tickerApi.ts
│   │   └── tickerApi.test.ts
│   ├── components/
│   │   ├── Chart.tsx
│   │   ├── Chart.test.tsx
│   │   ├── ChartContainer.tsx
│   │   ├── ChartContainer.test.tsx
│   │   ├── Loader.tsx
│   │   ├── Loader.test.tsx
│   │   ├── TickerList.tsx
│   │   └── TickerList.test.tsx
│   ├── hooks/
│   │   ├── useHistory.ts
│   │   ├── useHistory.test.ts
│   │   ├── useWebSocket.ts
│   │   └── useWebSocket.test.ts
│   ├── layouts/
│   │   ├── MainLayout.tsx
│   │   └── MainLayout.test.tsx
│   ├── pages/
│   │   ├── Login.tsx
│   │   └── Login.test.tsx
│   ├── services/
│   │   ├── auth.ts
│   │   └── auth.test.ts
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── AppWrapper.tsx
│   ├── AppWrapper.test.tsx
│   ├── index.tsx
│   ├── index.test.tsx
│   ├── reportWebVitals.ts
│   ├── reportWebVitals.test.ts
│   └── setupTests.ts
├── Dockerfile
├── package.json
├── tsconfig.json
└── README.md
```

## Requirements

- Node.js 18 or later
- Backend server running on port `5000`

## Installation

From the frontend folder:

```powershell
cd frontend
npm.cmd install
```

If your PowerShell session allows normal npm execution, `npm install` also works.

## Running the App

Start the frontend development server:

```powershell
npm.cmd start
```

Then open `http://localhost:3000`.

## Available Scripts

- `npm.cmd start` starts the development server
- `npm.cmd test` runs the frontend unit tests
- `npm.cmd run build` builds the production bundle into `build/`
- `npm.cmd run eject` ejects Create React App configuration

## Backend Integration

This frontend expects the backend to expose:

- `ws://localhost:5000` for live price updates
- `http://localhost:5000/api/tickers` for ticker symbols
- `http://localhost:5000/api/history/:symbol` for chart history

If the backend is not running, login still renders but the dashboard data will not populate correctly.

## UI Flow

1. User opens the app.
2. Login page is shown when no token is present.
3. Successful login stores a mock token in `localStorage`.
4. A dashboard loader appears briefly.
5. The main dashboard renders with live tickers and chart history.

## Testing

The frontend now has unit tests for the main executable modules, including:

- app rendering and selection flow
- login page behavior
- auth helpers
- API helper functions
- custom hooks
- reusable components
- layout behavior
- entry bootstrap and web vitals wiring

Run the suite with:

```powershell
npm.cmd test -- --watchAll=false
```

## Docker

Build the image from the `frontend` folder:

```bash
docker build -t multibank-frontend .
```

Run it with:

```bash
docker run -p 3000:3000 multibank-frontend
```

## Troubleshooting

### PowerShell blocks npm

Use `npm.cmd` instead of `npm`:

```powershell
npm.cmd start
```

Or allow scripts for the current session:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
```

### Port 3000 is already in use

Stop the other process using port `3000`, or start the frontend on another port.

### Backend data is missing

Make sure the backend server is running on port `5000` before opening the dashboard.
