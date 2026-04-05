# Real-Time Trading Dashboard

## Overview
A fullstack real-time trading dashboard built with React, TypeScript, and Node.js. It streams live ticker prices using WebSocket and displays historical data via REST APIs.

## Tech Stack
- Frontend: React + TypeScript + Recharts
- Backend: Node.js + Express + WebSocket
- Docker for containerization

## Features
- Live ticker price updates (WebSocket)
- Historical price chart
- Client-side caching
- Responsive UI

## Architecture
- REST API for static data
- WebSocket for real-time streaming
- In-memory store for simplicity

## Trade-offs
- Used in-memory storage instead of Redis for simplicity
- Mocked data instead of real APIs

## Setup

```bash
docker-compose up
```

Frontend: http://localhost:3000  
Backend: http://localhost:5000  

## Tests

```bash
cd backend
npm test
```

## Bonus Features
- Client-side caching
- Price alert logging

## Future Improvements
- Redis caching
- Authentication        
- Kafka streaming