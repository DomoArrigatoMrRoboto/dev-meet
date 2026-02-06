import Card from "./Card";

const cardsData = [
  { title: "Attendees", value: "48", icon: "👨‍💻" },
  { title: "Projects", value: "12", icon: "🚀" },
  { title: "Sessions", value: "5", icon: "🎤" },
  { title: "Pull Requests", value: "87", icon: "🔀" },
  { title: "Deployments", value: "14", icon: "⚡" },
  { title: "Issues Solved", value: "132", icon: "✅" }
];

export default function DashboardCards({ data }) {
  return (
    <div className="cards-grid">
      {cardsData.map(card =>
        <Card
          key={card.key}
          title={card.title}
          value={card.value}
          icon={card.icon}
        />
      )}
    </div>
  );
}
