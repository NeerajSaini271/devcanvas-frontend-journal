"use client";

import { useEffect } from "react";

export default function LogoutEffect() {
  useEffect(() => {
    sessionStorage.removeItem("devcanvas-demo-session");
    window.dispatchEvent(new Event("devcanvas-session-change"));
  }, []);
  return null;
}
