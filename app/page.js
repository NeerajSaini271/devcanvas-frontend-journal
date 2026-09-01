import Link from "next/link";
import ArticleExplorer from "@/components/articles/ArticleExplorer";
import FeaturedArticle from "@/components/articles/FeaturedArticle";
import { articles, topics } from "@/data/articles";

export default function HomePage() {
  const featured = articles.find((article) => article.featured);
  const latest = articles.filter((article) => !article.featured);
  const averageRead = Math.round(
    articles.reduce(
      (sum, article) => sum + Number.parseInt(article.readTime, 10),
      0,
    ) / articles.length,
  );
  const topicCount = new Set(articles.map((article) => article.topic)).size;

  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Learn. Build. Explain.</span>
            <h1>Practical frontend ideas, shaped for real projects.</h1>
            <p>
              DevCanvas collects concise engineering notes on React, Next.js,
              JavaScript, CSS, accessibility, and maintainable interface design.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#latest-heading">
                Explore articles
              </a>
              <Link className="button button-secondary" href="/about">
                About DevCanvas
              </Link>
            </div>
            <div className="hero-stats" aria-label="Publication summary">
              <div>
                <strong>{articles.length}</strong>
                <span>Published notes</span>
              </div>
              <div>
                <strong>{topicCount}</strong>
                <span>Core topics</span>
              </div>
              <div>
                <strong>{averageRead} min</strong>
                <span>Average read</span>
              </div>
            </div>
          </div>
          <div className="hero-panel" aria-label="DevCanvas topic preview">
            <div className="code-window">
              <div className="window-bar">
                <span />
                <span />
                <span />
              </div>
              <pre>
                <code>{`export function clearUI(idea) {\n  return {\n    structure: idea,\n    noise: 0,\n    intent: \"visible\",\n  };\n}`}</code>
              </pre>
            </div>
            <div className="floating-note note-one">Responsive by default</div>
            <div className="floating-note note-two">
              Accessible interactions
            </div>
          </div>
        </div>
      </section>
      <div className="shell content-stack">
        <section className="section" aria-labelledby="featured-heading">
          <div className="section-heading">
            <span className="eyebrow">Start here</span>
            <h2 id="featured-heading">Featured article</h2>
          </div>
          <FeaturedArticle article={featured} />
        </section>
        <ArticleExplorer articles={latest} topics={topics} />
        <section className="newsletter">
          <div>
            <span className="eyebrow light">Keep learning</span>
            <h2>Turn useful ideas into stronger interfaces.</h2>
            <p>
              Explore the latest notes or review the moderation dashboard
              demonstration.
            </p>
          </div>
          <Link className="button button-light" href="/comments">
            Open dashboard
          </Link>
        </section>
      </div>
    </>
  );
}
