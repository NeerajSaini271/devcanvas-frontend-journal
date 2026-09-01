export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="shell page-section narrow-page">
      <span className="eyebrow">About the project</span>
      <h1>
        A publishing interface built to practice thoughtful frontend
        engineering.
      </h1>
      <p className="lead">
        DevCanvas is an independent educational Next.js project focused on
        article discovery, responsive layout systems, accessible interactions,
        and clean component boundaries.
      </p>
      <div className="value-grid">
        <article>
          <span>01</span>
          <h2>Clarity first</h2>
          <p>Content hierarchy and calm visual rhythm guide every screen.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Useful interaction</h2>
          <p>
            Search, filters, forms, and moderation controls have clear outcomes.
          </p>
        </article>
        <article>
          <span>03</span>
          <h2>Honest scope</h2>
          <p>
            Session-only demonstrations are labelled clearly without fake
            backend claims.
          </p>
        </article>
      </div>
      <div className="about-panel">
        <h2>Built with</h2>
        <p>
          Next.js App Router, React, Tailwind CSS, modern JavaScript, and
          ESLint.
        </p>
      </div>
    </div>
  );
}
