# Real-Time Trading Dashboard

This repository contains a full-stack trading dashboard with a React frontend and a Node.js backend. It combines REST APIs, WebSocket price streaming, mock authentication, chart visualization, responsive UI behavior, and Docker-based local startup.

## Project Overview

The application is split into two main parts:

- `frontend/` contains the React + TypeScript dashboard UI
- `backend/` contains the Express + TypeScript API and WebSocket server

The frontend connects to the backend to:

- fetch ticker symbols and historical chart data over HTTP
- receive live market price updates over WebSocket
- simulate a simple login experience with mock credentials

## Features

- Live ticker price updates using WebSocket
- Historical chart data for the selected symbol
- Mock login flow with `admin / admin`
- Post-login dashboard loader
- Selected ticker highlighting
- BTC threshold alert behavior
- Client-side history caching in the frontend
- Responsive dashboard layout for mobile and desktop
- Docker support for frontend and backend services
- Unit tests for backend and frontend modules

## Tech Stack

### Frontend

- React 19
- TypeScript
- Material UI 7
- Axios
- Recharts
- React Testing Library

### Backend

- Node.js
- Express
- TypeScript
- WebSocket (`ws`)
- Jest

### Tooling

- Docker
- Docker Compose

## Repository Structure

```text
multibank-group-assessment/
├── backend/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
├── docker-compose.yml
└── README.md
```

## Architecture Summary

- The backend exposes REST endpoints under `http://localhost:5000/api`
- The backend also exposes a WebSocket server at `ws://localhost:5000`
- The frontend runs on `http://localhost:3000`
- Market data is simulated in memory for simplicity
- Historical requests are cached in the frontend hook layer

## API and Realtime Flow

### Backend endpoints

- `GET /api/tickers` returns the available symbols
- `GET /api/history/:symbol` returns mock historical data for a selected symbol

### WebSocket

- The frontend subscribes to `ws://localhost:5000`
- The backend pushes updated prices roughly every second

## Local Setup

### Requirements

- Node.js 18 or later
- npm
- Docker Desktop if you want container-based startup

### Run without Docker

Start the backend:

```bash
cd backend
npm install
npm run dev
```

Start the frontend in a separate terminal:

```bash
cd frontend
npm install
npm start
```

Application URLs:

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000/api`
- Backend WebSocket: `ws://localhost:5000`

### Run with Docker Compose

From the repository root:

```bash
docker-compose up --build
```

This starts:

- `frontend` on port `3000`
- `backend` on port `5000`

## Login Credentials

The frontend uses mock authentication.

- Username: `admin`
- Password: `admin`

## Testing

### Backend tests

```bash
cd backend
npm test
```

### Frontend tests

```bash
cd frontend
npm test -- --watchAll=false
```

The frontend currently includes unit tests for app flow, layout, login, hooks, components, service helpers, API helpers, bootstrap wiring, and web vitals integration.

## Docker Files

- `backend/Dockerfile` starts the backend with `npm start`
- `frontend/Dockerfile` starts the frontend with `npm start`
- `docker-compose.yml` runs both services together

## Trade-offs and Assumptions

- Market data is mocked instead of coming from a real provider
- Backend state is stored in memory instead of Redis or a database
- Authentication is intentionally mocked for demonstration purposes
- The app is optimized for local development and assessment review, not production deployment

## Notes

- The frontend and backend each have their own README with folder-specific details
- The frontend has been made responsive for smaller screen sizes
- The backend uses CommonJS-compatible TypeScript module patterns

## Future Improvements

- Replace mock auth with a real authentication flow
- Persist market data and history in a database or cache layer
- Add environment-based configuration for API and WebSocket URLs
- Add production Docker and deployment configuration
- Add end-to-end tests for full user flows