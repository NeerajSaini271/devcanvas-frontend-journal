"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DemoSessionGuard({ children }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("devcanvas-demo-session") !== "active") {
      router.replace("/login");
      return;
    }
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div className="session-loading">Checking demonstration access…</div>
    );
  }

  return children;
}
