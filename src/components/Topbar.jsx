import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Topbar({ user }) {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <span>
          Welcome, <strong>{user?.email.split("@")[0]}</strong>
        </span>
        <img
          src={user?.photoURL || "https://i.pravatar.cc/40"}
          alt="User avatar"
          className="user-pic"
        />
      </div>
     
      <div className="topbar-right">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}
