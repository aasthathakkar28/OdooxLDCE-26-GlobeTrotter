# GlobeTrotter

GlobeTrotter is a full-stack, responsive travel-planning application for creating multi-city trips, organizing itineraries, estimating costs, discovering destinations and activities, and sharing travel plans with a community.

## Project Statement

The project solves the complexity of planning multi-city travel in one user-centered workspace. A traveler can create a trip, assign travel dates, add destinations and activities, review a day-wise itinerary, monitor estimated costs, view plans on a calendar, and manage their profile and preferences.

The product experience is designed around these principles:

- **Personalized planning:** users control their own trips, stops, dates, activities, and budget categories.
- **Discoverable travel:** city and activity search helps users find relevant places and experiences.
- **Clear decisions:** itinerary and budget views make dates, activities, and estimated expenses easy to scan.
- **Collaboration and sharing:** community content and public itinerary views make it possible to learn from and share travel plans.
- **Responsive UX:** the same workflows remain usable on desktop and mobile, with accessible labels, clear empty states, and actionable controls.

## Payment Details

GlobeTrotter currently supports **budget estimation only**. The budget page displays estimated costs for transport, accommodation, activities, and meals, along with totals and budget alerts.

There is currently no payment gateway, checkout, booking transaction, card storage, bank integration, or financial data processing. No card numbers, CVVs, bank credentials, or payment tokens should be entered into this application. Any future payment integration must use a PCI-compliant provider and tokenized provider-hosted fields rather than storing payment details in the application database.

## Screen and Feature Map

| Area | Route | Main features |
| --- | --- | --- |
| Login / signup | `/login`, `/signup` | Account creation, login, validation, JWT session |
| Dashboard | `/` | Welcome hub, inspiration, recent trips, quick navigation |
| Create trip | `/create-trip` | Trip name, start/end dates, description, optional cover, save flow |
| My trips | `/trips` | Search, lifecycle grouping, sorting, view, edit, delete |
| Itinerary builder | `/trips/:id/builder` | Sections/stops, dates, budgets, add/remove actions |
| Itinerary view | `/trips/:id/itinerary` | Day-wise activities, expense column, search, sort, share/edit |
| City search | `/cities` | Search, region filter, sort, destination details, add toggle |
| Activity search | `/activities` | Search, type filter, sort, cost/duration details, add toggle |
| Budget | `/budget` | Estimated total, average/day, category breakdown, alerts |
| Calendar | `/calendar` | Month navigation, search, trip visibility, event cards |
| Shared itinerary | `/shared/:id` | Read-only shareable itinerary view |
| Community | `/community` | Searchable posts, filters, likes, comments/share affordances |
| Profile / settings | `/settings` | Editable profile details, preferences, saved trip sections |
| Admin / analytics | `/admin` | User management, popular cities/activities, trends |

## Technology and Methodology

- **Client:** React, React Router, Vite, and Lucide icons.
- **Server:** Node.js, Express, CORS, Morgan, and JWT middleware.
- **Persistence:** a local JSON database at `server/data/db.json`. The database is created automatically when the server starts.
- **Authentication:** passwords are hashed with bcrypt, and protected API routes require a Bearer JWT.
- **State management:** page-level React state is used for filters, forms, theme selection, and interactive controls. Server-backed trip state is loaded through the client API service.
- **Theme UX:** light/dark mode is global and persists through `localStorage`.

## Run Locally

From the repository root:

```bash
npm install
npm run install:all
npm run dev
```

The client normally runs at `http://localhost:5173` and the API at `http://localhost:5000`.

Run either side independently when needed:

```bash
npm run client
npm run server
```

Verify the backend is available at:

```text
GET http://localhost:5000/api/health
```

Expected response:

```json
{"status":"ok","message":"GlobeTrotter API is running"}
```

## Demo Account

The server creates this account automatically if it does not already exist:

- Email: `demo@globetrotter.com`
- Password: `demo123`

## API Contract

Authentication endpoints:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`

Protected trip endpoints:

- `GET /api/trips`
- `POST /api/trips`
- `GET /api/trips/:id`
- `PUT /api/trips/:id`
- `DELETE /api/trips/:id`
- `POST /api/trips/:id/stops`
- `DELETE /api/trips/:id/stops/:stopId`
- `POST /api/trips/:id/stops/:stopId/activities`

Trip ownership is enforced on the server: users can only read or modify trips belonging to their authenticated account.

## Repository Structure

```text
client/                 React frontend and page UX
client/src/pages/       Application screens
client/src/components/  Shared layout and UI components
client/src/context/     Auth and theme providers
client/src/services/    API client
client/src/styles/      Global responsive and theme styles
server/                 Express API
server/src/routes/      Auth and trip endpoints
server/src/middleware/  JWT authentication middleware
server/data/db.json     Local persistent users and trips
```
