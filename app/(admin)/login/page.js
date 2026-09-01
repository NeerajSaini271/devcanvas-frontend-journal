import LoginForm from "@/components/admin/LoginForm";

export const metadata = { title: "Admin sign in" };

export default function LoginPage() {
  return (
    <div className="auth-layout">
      <div className="auth-intro">
        <span className="eyebrow">Dashboard access</span>
        <h1>Review the publishing workflow.</h1>
        <p>
          This demonstration validates the form locally and opens the
          session-only moderation dashboard.
        </p>
      </div>
      <div className="auth-card">
        <h2>Admin sign in</h2>
        <p>Use any valid email and a password with at least six characters.</p>
        <LoginForm />
      </div>
    </div>
  );
}
