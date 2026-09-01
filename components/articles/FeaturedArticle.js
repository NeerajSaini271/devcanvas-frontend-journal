import Link from "next/link";
import ArticleVisual from "./ArticleVisual";

export default function FeaturedArticle({ article }) {
  return (
    <article className="featured-card">
      <ArticleVisual article={article} featured />
      <div className="featured-copy">
        <div className="article-meta">
          <span>{article.topic}</span>
          <span>{article.readTime}</span>
        </div>
        <h2>{article.title}</h2>
        <p>{article.excerpt}</p>
        <Link className="read-link" href={`/articles/${article.slug}`}>
          Read featured article →
        </Link>
        <div className="article-byline">
          <span>{article.author}</span>
          <time>{article.date}</time>
        </div>
      </div>
    </article>
  );
}
