import { Calendar, MapPin, MoreHorizontal, Eye, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function TripCard({ trip }) {
 return <article className="trip-card">
   <div className="trip-cover"><span>{trip.cities[0] === "Paris" ? "🗼" : trip.cities[0] === "Tokyo" ? "🌸" : "🌆"}</span><button className="more-btn"><MoreHorizontal size={20}/></button></div>
   <div className="trip-content"><div className="trip-title-row"><h3>{trip.name}</h3><span className={"status "+trip.status.toLowerCase()}>{trip.status}</span></div>
   <p><Calendar size={15}/>{trip.dates}</p><p><MapPin size={15}/>{trip.destinations} destinations · {trip.cities.join(" → ")}</p>
   <div className="trip-footer"><b>${trip.budget.toLocaleString()}</b><div className="mini-actions"><Link to={`/trips/${trip.id}/itinerary`} title="View"><Eye size={17}/></Link><Link to={`/trips/${trip.id}/builder`} title="Edit"><Pencil size={17}/></Link><button title="Delete"><Trash2 size={17}/></button></div></div></div>
 </article>;
}