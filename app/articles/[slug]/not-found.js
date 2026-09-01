import Link from "next/link";

export default function ArticleNotFound() {
  return (
    <div className="shell not-found-card">
      <span className="eyebrow">Article unavailable</span>
      <h1>This article could not be found.</h1>
      <p>Return to DevCanvas and explore the current collection.</p>
      <Link className="button button-primary" href="/">
        Back to Discover
      </Link>
    </div>
  );
}
