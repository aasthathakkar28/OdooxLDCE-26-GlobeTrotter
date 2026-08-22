export default function EmptyState({ icon="🧭", title="Nothing here yet", text="Start by creating something new." }) {
 return <div className="empty-state"><div className="empty-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>;
}