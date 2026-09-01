import Link from "next/link";
import LogoutEffect from "@/components/admin/LogoutEffect";
export const metadata = { title: "Signed out" };
export default function LogoutPage() {
  return (
    <div className="signed-out-card">
      <LogoutEffect />
      <span className="success-mark">✓</span>
      <span className="eyebrow">Session complete</span>
      <h1>You are signed out.</h1>
      <p>This front-end demonstration does not retain authentication data.</p>
      <div className="hero-actions">
        <Link className="button button-primary" href="/">
          Return home
        </Link>
        <Link className="button button-secondary" href="/login">
          Sign In Again
        </Link>
      </div>
    </div>
  );
}
