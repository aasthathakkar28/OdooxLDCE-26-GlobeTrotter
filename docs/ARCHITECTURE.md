# Ekado Travel Architecture

## Repository Layout

```text
.
├── client/                 React + Vite application
│   ├── src/components/     Reusable UI and layout pieces
│   ├── src/context/        Authentication and theme providers
│   ├── src/data/           Demo discovery and itinerary data
│   ├── src/pages/          Route-level screens
│   ├── src/services/       API client functions
│   └── src/styles/         Global responsive and theme CSS
├── server/                 Express API
│   ├── src/middleware/      JWT authorization middleware
│   ├── src/routes/          Authentication and trip endpoints
│   └── data/                Local development database location
├── docs/                   Maintainer and employee documentation
├── README.md               Product, setup, route, and API overview
└── CONTRIBUTING.md         Development and pull request workflow
```

## Request Flow

1. A user opens a protected route in the React client.
2. `AuthContext` restores the JWT from browser storage and calls `/api/auth/me`.
3. Page components load or mutate trip data through `client/src/services/api.js`.
4. Express authenticates protected requests with the JWT middleware.
5. Trip ownership is checked against the authenticated user before data is returned or changed.
6. The server persists development data in `server/data/db.json`.

## Ownership Boundaries

- Pages coordinate screen state and user interactions.
- Shared components provide repeated visual patterns.
- Context providers own cross-page auth and theme state.
- The API service is the only client boundary for server requests.
- Routes validate input and enforce ownership before persistence.
- The local JSON database is for development/demo use only.

## Adding a Feature

1. Add or update the route-level page in `client/src/pages/`.
2. Reuse existing layout and common components where possible.
3. Add API methods in `client/src/services/api.js` when server data is required.
4. Add protected Express handlers under `server/src/routes/`.
5. Update `README.md` and the screen/API map.
6. Run client build, server syntax checks, and the API health check.
