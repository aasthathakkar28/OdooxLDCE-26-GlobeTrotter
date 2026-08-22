import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";
import { readDB, writeDB } from "./db.js";
import authRoutes from "./routes/auth.js";
import tripRoutes from "./routes/trips.js";

// Initialize default seed data if needed
const db = readDB();
let demo = db.users.find((u) => u.email === "demo@globetrotter.com");
if (!demo) {
  demo = {
    id: uuid(),
    name: "Demo Traveler",
    email: "demo@globetrotter.com",
    password: bcrypt.hashSync("demo123", 10),
    createdAt: new Date().toISOString(),
  };
  db.users.push(demo);
}

if (!db.trips.some((trip) => trip.userId === demo.id && trip.name === "European Escape")) {
  db.trips.push({
    id: uuid(),
    userId: demo.id,
    name: "European Escape",
    startDate: "2026-09-12",
    endDate: "2026-09-22",
    description: "A first demo journey through art, food, and slow city walks.",
    cover: "",
    stops: [
      {
        id: uuid(),
        city: "Paris",
        startDate: "2026-09-12",
        endDate: "2026-09-14",
        activities: [
          { id: uuid(), name: "Eiffel Tower Visit", type: "Sightseeing", cost: 35, duration: "2 hrs" },
        ],
      },
      {
        id: uuid(),
        city: "Rome",
        startDate: "2026-09-15",
        endDate: "2026-09-17",
        activities: [
          { id: uuid(), name: "Street Food Tour", type: "Food", cost: 42, duration: "3 hrs" },
        ],
      },
      {
        id: uuid(),
        city: "Barcelona",
        startDate: "2026-09-18",
        endDate: "2026-09-22",
        activities: [
          { id: uuid(), name: "Gothic Quarter Walk", type: "Sightseeing", cost: 0, duration: "2 hrs" },
        ],
      },
    ],
    budget: { transport: 720, stay: 950, activities: 430, meals: 350 },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  db.trips.push({
    id: uuid(),
    userId: demo.id,
    name: "Japan Discovery",
    startDate: "2026-12-04",
    endDate: "2026-12-12",
    description: "A compact route for food, design, and neighbourhood discoveries.",
    cover: "",
    stops: [
      {
        id: uuid(),
        city: "Tokyo",
        startDate: "2026-12-04",
        endDate: "2026-12-08",
        activities: [
          { id: uuid(), name: "Shibuya Walk", type: "Sightseeing", cost: 0, duration: "2 hrs" },
        ],
      },
      {
        id: uuid(),
        city: "Kyoto",
        startDate: "2026-12-09",
        endDate: "2026-12-12",
        activities: [],
      },
    ],
    budget: { transport: 580, stay: 840, activities: 160, meals: 320 },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}
writeDB(db);

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (req, res) =>
  res.json({ status: "ok", message: "GlobeTrotter API is running" })
);
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);

app.use((req, res) => res.status(404).json({ message: "Route not found" }));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});