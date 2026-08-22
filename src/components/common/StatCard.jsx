export default function StatCard({ label, value, hint, icon }) {
  return <div className="stat-card"><div className="stat-icon">{icon}</div><div><span>{label}</span><h2>{value}</h2><small>{hint}</small></div></div>;
}