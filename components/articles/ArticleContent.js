import Link from "next/link";
import ArticleVisual from "./ArticleVisual";

export default function ArticleContent({ article }) {
  return (
    <article className="article-page shell">
      <Link className="back-link" href="/#latest-heading">
        ← Back to articles
      </Link>

      <header className="article-page-hero">
        <div className="article-page-header">
          <span className="eyebrow">{article.topic}</span>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
          <div className="article-page-meta">
            <span>{article.author}</span>
            <time>{article.date}</time>
            <span>{article.readTime}</span>
          </div>
        </div>

        <div className="article-page-visual">
          <ArticleVisual article={article} />
        </div>
      </header>

      <div className="article-prose">
        {article.content.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
