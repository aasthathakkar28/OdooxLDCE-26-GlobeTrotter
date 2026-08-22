# Ekado Travel Demo Guide

## Opening

Ekado Travel is a full-stack travel planner. It helps users create multi-city trips, discover destinations and activities, organize itineraries, estimate costs, and share plans.

## Suggested Walkthrough

### 1. Authentication

Use the demo account:

- Email: `demo@globetrotter.com`
- Password: `demo123`

Explain that login and signup are connected to the Express API and use JWT authentication.

### 2. Dashboard

Show the sample trips, destination suggestions, search controls, theme toggle, notifications, and profile menu. Explain that the dashboard is the navigation hub for the rest of the product.

### 3. Trip Creation

Create a sample trip such as `Weekend in Rome`:

- Choose a destination.
- Select start and end dates.
- Add optional start and end times.
- Add a description.
- Optionally select a cover image.
- Save and continue to the itinerary builder.

Mention that invalid date or same-day time ranges are rejected by both the client and server.

### 4. Planning and Review

Add itinerary sections, destinations, activities, and estimated budgets. Then review the day-wise itinerary, budget breakdown, and calendar. Use the share action to show the read-only shared view.

### 5. Discovery and Community

Search cities and activities using text, filters, and sorting. Show result metadata and the Add/Added controls. Open Community to demonstrate searchable posts, likes, and travel discussions.

### 6. Profile and Admin

Open My Profile to show editable details, preferences, notifications, privacy options, and trip collections. The Admin screen demonstrates users, popular destinations, popular activities, and analytics.

## Limitations to Explain

- Budget values are estimates only.
- No payment gateway, checkout, booking transaction, or card storage is implemented.
- Demo discovery and community content is local sample data.
- The local JSON database is intended for development and demonstration, not production deployment.
- Profile photo selection records the selected file name; it does not upload image bytes to a storage service.
- Some analytics values are illustrative demo metrics.
