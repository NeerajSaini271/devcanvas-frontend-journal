import Link from "next/link";
import ArticleVisual from "./ArticleVisual";

export default function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <Link
        href={`/articles/${article.slug}`}
        className="article-card-link"
        aria-label={`Read ${article.title}`}
      >
        <ArticleVisual article={article} />
        <div className="article-card-body">
          <div className="article-meta">
            <span>{article.topic}</span>
            <span>{article.readTime}</span>
          </div>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
          <span className="read-link">Read article →</span>
          <div className="article-byline">
            <span>{article.author}</span>
            <time>{article.date}</time>
          </div>
        </div>
      </Link>
    </article>
  );
}
