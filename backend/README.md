# Backend - MultiBank Group Assessment

A Node.js backend server built with Express, TypeScript, and WebSocket support for real-time market data streaming.

## Project Description

This backend provides:
- RESTful API endpoints for ticker data
- WebSocket support for real-time price updates
- Market data simulation and caching
- CORS support for cross-origin requests

## Tech Stack

- **Runtime**: Node.js 18+
- **Language**: TypeScript
- **Framework**: Express.js
- **Real-time**: WebSocket (ws)
- **Development**: ts-node, nodemon
- **Testing**: Jest
- **Module System**: CommonJS

## Installation

### Prerequisites
- Node.js 18 or higher
- npm or npm.cmd (Windows)

### Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```
Uses nodemon to automatically restart on file changes. Server runs on `http://localhost:5000`

### Production Mode
```bash
npm start
```
Runs the server once on port 5000

### Using Docker
```bash
docker build -t multibank-backend .
docker run -p 5000:5000 multibank-backend
```

## Project Structure

```
backend/
├── src/
│   ├── server.ts           # Main server entry point
│   ├── services/
│   │   └── market.service.ts   # Market data logic
│   ├── routes/
│   │   └── ticker.routes.ts    # API route definitions
│   ├── websocket/
│   │   └── ws.ts           # WebSocket server setup
│   ├── models/             # Data models (empty)
│   └── tests/
│       └── market.test.ts  # Unit tests
├── package.json
├── tsconfig.json
├── Dockerfile
└── README.md
```

## API Endpoints

### GET /api/tickers
Returns list of available ticker symbols
```json
["BTC-USD", "ETH-USD", "AAPL"]
```

### GET /api/history/:symbol
Returns price history for a specific ticker (50 data points)

## WebSocket

Connect to `ws://localhost:5000` for real-time price updates. The server sends price data every 1 second:
```json
{
  "BTC-USD": 60000,
  "ETH-USD": 3000,
  "AAPL": 180
}
```

## Available Scripts

- `npm run dev` - Start development server with auto-reload
- `npm start` - Start production server
- `npm test` - Run Jest tests
- `npm run build` - Compile TypeScript (if enabled)

## Configuration

### TypeScript Settings
- **Module**: CommonJS
- **Target**: ES Next
- **Strict Mode**: Enabled
- **Module Detection**: Force ECMAScript

### Environment Variables
Currently none required. Configure as needed in:
- `src/server.ts` (port settings)
- `src/services/market.service.ts` (data defaults)

## Testing

Run tests with:
```bash
npm test
```

Tests are located in `src/tests/` and use Jest.

## Dependencies

### Production
- `express` - Web framework
- `cors` - Cross-origin resource sharing
- `ws` - WebSocket library

### Development
- `typescript` - TypeScript compiler
- `ts-node` - TypeScript execution
- `nodemon` - File watcher for development
- `jest` - Testing framework
- `@types/*` - TypeScript type definitions

## Troubleshooting

### PowerShell Execution Policy Error
If you see an error about scripts being disabled:
```powershell
npm install
npm run dev
```
Or set execution policy:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
```

### Port Already in Use
If port 5000 is in use, modify the port in `src/server.ts`

## Contributing

1. Ensure TypeScript compiles without errors
2. Run tests before committing
3. Follow the existing code structure
4. Use CommonJS module syntax (require/module.exports)

## License

ISC
