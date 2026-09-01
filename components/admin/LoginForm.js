"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function submit(event) {
    event.preventDefault();
    if (!email.includes("@") || password.length < 6) {
      setError(
        "Enter a valid email and a password with at least 6 characters.",
      );
      return;
    }
    sessionStorage.setItem("devcanvas-demo-session", "active");
    window.dispatchEvent(new Event("devcanvas-session-change"));
    setError("");
    router.push("/comments");
  }

  return (
    <form className="auth-form" onSubmit={submit} noValidate>
      <label>
        Email address
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="editor@devcanvas.local"
          autoComplete="email"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Minimum 6 characters"
          autoComplete="current-password"
        />
      </label>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <button className="button button-primary wide" type="submit">
        Open Dashboard
      </button>
      <p className="form-note">
        Demonstration only. No credentials are stored or sent to a server.
      </p>
    </form>
  );
}
