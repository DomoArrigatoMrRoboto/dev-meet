import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        "demo@portofolio.com",
        "Demo1234"
      );
      onLogin(userCredential.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="video-grid">
        <video src="/videos/video1.mp4" autoPlay muted loop />
        <video src="/videos/video2.mp4" autoPlay muted loop />
        <video src="/videos/video3.mp4" autoPlay muted loop />
        <video src="/videos/video4.mp4" autoPlay muted loop />
      </div>

      <div className="dynamic-bg" />
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error &&
            <p className="error">
              {error}
            </p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
