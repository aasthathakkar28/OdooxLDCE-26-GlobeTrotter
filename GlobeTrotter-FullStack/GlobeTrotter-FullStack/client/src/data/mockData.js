export const trips = [
  { id: 1, name: "European Escape", dates: "12 Sep – 22 Sep 2026", destinations: 3, budget: 2450, status: "Upcoming", cities: ["Paris", "Rome", "Barcelona"] },
  { id: 2, name: "Japan Discovery", dates: "04 Dec – 12 Dec 2026", destinations: 2, budget: 1800, status: "Planning", cities: ["Tokyo", "Kyoto"] },
  { id: 3, name: "Dubai Weekend", dates: "10 Jan – 13 Jan 2027", destinations: 1, budget: 720, status: "Draft", cities: ["Dubai"] }
];

export const cities = [
  { name: "Paris", country: "France", region: "Europe", cost: "High", popularity: 98, emoji: "🗼" },
  { name: "Tokyo", country: "Japan", region: "Asia", cost: "High", popularity: 97, emoji: "🗼" },
  { name: "Dubai", country: "UAE", region: "Middle East", cost: "Medium", popularity: 95, emoji: "🌆" },
  { name: "Rome", country: "Italy", region: "Europe", cost: "Medium", popularity: 94, emoji: "🏛️" },
  { name: "Bali", country: "Indonesia", region: "Asia", cost: "Low", popularity: 93, emoji: "🌴" },
  { name: "Barcelona", country: "Spain", region: "Europe", cost: "Medium", popularity: 91, emoji: "🏖️" }
];

export const activities = [
  { id: 1, name: "Eiffel Tower Visit", type: "Sightseeing", duration: "2 hrs", cost: 35, city: "Paris", emoji: "🗼" },
  { id: 2, name: "Seine River Cruise", type: "Relaxation", duration: "1.5 hrs", cost: 28, city: "Paris", emoji: "🚢" },
  { id: 3, name: "Street Food Tour", type: "Food", duration: "3 hrs", cost: 42, city: "Rome", emoji: "🍝" },
  { id: 4, name: "Desert Safari", type: "Adventure", duration: "6 hrs", cost: 75, city: "Dubai", emoji: "🏜️" },
  { id: 5, name: "Shibuya Walk", type: "Sightseeing", duration: "2 hrs", cost: 0, city: "Tokyo", emoji: "🚶" }
];

export const budgetData = [
  { label: "Transport", value: 720 },
  { label: "Stay", value: 950 },
  { label: "Activities", value: 430 },
  { label: "Meals", value: 350 }
];

export const itinerary = [
  { day: "Day 1", date: "12 Sep", city: "Paris", activities: ["Hotel Check-in", "Eiffel Tower Visit"], cost: 220 },
  { day: "Day 2", date: "13 Sep", city: "Paris", activities: ["Seine River Cruise", "Montmartre Walk"], cost: 180 },
  { day: "Day 3", date: "14 Sep", city: "Rome", activities: ["Flight to Rome", "Street Food Tour"], cost: 310 }
];
