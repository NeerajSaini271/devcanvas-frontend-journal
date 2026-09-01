export const metadata = {
  title: { default: "Admin", template: "%s | DevCanvas Admin" },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return (
    <section className="admin-area">
      <div className="shell admin-shell">{children}</div>
    </section>
  );
}
