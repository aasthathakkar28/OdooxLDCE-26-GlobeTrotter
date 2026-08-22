import { NavLink } from "react-router-dom";
import { LayoutDashboard, Map, PlusCircle, Search, CalendarDays, Wallet, Settings, BarChart3, Compass, Users } from "lucide-react";

const links = [
  ["/", "Dashboard", LayoutDashboard],
  ["/trips", "My Trips", Map],
  ["/create-trip", "Create Trip", PlusCircle],
  ["/cities", "Explore Cities", Search],
  ["/activities", "Activities", Compass],
  ["/calendar", "Calendar", CalendarDays],
  ["/budget", "Budget", Wallet],
  ["/admin", "Analytics", BarChart3],
  ["/community", "Community", Users],
  ["/settings", "Settings", Settings]
];

export default function Sidebar() {
  return <aside className="sidebar">
    <NavLink to="/" className="brand"><span className="brand-compass"><Compass size={25}/></span><div>Ekado Travel<small>Plan. Explore. Remember.</small></div></NavLink>
    <nav>{links.map(([to, label, Icon]) => <NavLink key={to} end={to === "/"} to={to} className="nav-link"><Icon size={19}/><span>{label}</span></NavLink>)}</nav>
    <div className="sidebar-card"><b>✈ Ready to explore?</b><p>Build your next unforgettable journey.</p><NavLink to="/create-trip" className="btn btn-light">Plan a trip</NavLink></div>
  </aside>;
}