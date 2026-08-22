# Contributing to Ekado Travel

## Before You Start

1. Install Node.js 18 or newer.
2. Run `npm run install:all` from the repository root.
3. Copy `server/.env.example` to `server/.env`.
4. Set a private `JWT_SECRET` in `server/.env`.
5. Run `npm run dev` and open the client URL shown by Vite.

## Project Boundaries

- Put user-facing React screens in `client/src/pages/`.
- Put reusable UI in `client/src/components/`.
- Keep authentication and theme state in `client/src/context/`.
- Keep HTTP calls in `client/src/services/`.
- Put API routes and server middleware in `server/src/`.
- Never commit `server/.env`, generated `server/data/db.json`, `node_modules`, or build output.

## Change Workflow

1. Create a focused branch for the change.
2. Keep UI changes consistent with the existing Ekado Travel design system.
3. Preserve protected-route ownership checks for trip data.
4. Add or update documentation when a route, API contract, or user workflow changes.
5. Run editor diagnostics and the relevant package checks before opening a pull request.
6. Describe the user-visible behavior, test commands, and any known limitations.

## Pull Request Checklist

- [ ] The change is limited to the requested feature.
- [ ] Loading, empty, error, and mobile states are considered.
- [ ] No secrets or generated data are included.
- [ ] Client diagnostics pass.
- [ ] Server syntax and health checks pass.
- [ ] README or API documentation is updated when needed.

## Data and Security

The local JSON database is intended for development and demonstration only. Do not use real personal, payment, or production data. Ekado Travel estimates trip costs but does not process payments or store card details.
