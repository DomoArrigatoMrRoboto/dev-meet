import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCards from "../components/DashboardCards";
import { fetchGitHubStats } from "../api/GitHubAPI";
import { fetchAttendees } from "../api/RandomUserAPI";

export default function Dashboard({ user }) {
  const [cardsData, setCardsData] = useState([
    { key: "attendees", title: "Attendees", value: "48", icon: "👨‍💻" },
    { key: "projects", title: "Projects", value: "12", icon: "🚀" },
    { key: "sessions", title: "Sessions", value: "5", icon: "🎤" },
    { key: "pull_requests", title: "Pull Requests", value: "87", icon: "🔀" },
    { key: "deployments", title: "Deployments", value: "14", icon: "⚡" },
    { key: "issues", title: "Issues Solved", value: "132", icon: "✅" }
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const githubStats = await fetchGitHubStats("facebook", "react");
        const attendeesCount = await fetchAttendees(50);

        setCardsData(prev =>
          prev.map(card => {
            if (card.key === "attendees")
              return { ...card, value: attendeesCount };
            if (card.key === "projects")
              return { ...card, value: githubStats.projects };
            if (card.key === "pull_requests")
              return { ...card, value: githubStats.prs };
            if (card.key === "issues")
              return { ...card, value: githubStats.issues };
            return card;
          })
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <Topbar user={user} />
        <DashboardCards data={cardsData} />
      </main>
    </div>
  );
}
