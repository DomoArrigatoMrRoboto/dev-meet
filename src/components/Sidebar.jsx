import { AiOutlineLaptop } from "react-icons/ai";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <AiOutlineLaptop className="logo-icon" />
        <h1>DevMeet</h1>
      </div>

      <nav>
        <a className="active">Overview</a>
        <a>Agenda</a>
        <a>Speakers</a>
        <a>Projects</a>
        <a>Settings</a>
      </nav>
    </aside>
  );
}
