import Image from "next/image";

export default function ArticleVisual({ article, featured = false }) {
  return (
    <div
      className={`article-visual bg-gradient-to-br ${article.accent} ${featured ? "article-visual-featured" : ""}`}
    >
      <div className="article-visual-grid" aria-hidden="true" />

      <span className="article-topic-pill">
        {featured ? "Editor’s pick" : article.topic}
      </span>
      <Image
        className="article-visual-icon"
        src={article.visual}
        alt=""
        width={featured ? 720 : 560}
        height={featured ? 440 : 340}
        sizes={
          featured
            ? "(max-width: 900px) 100vw, 46vw"
            : "(max-width: 720px) 100vw, 33vw"
        }
        priority={featured}
      />
    </div>
  );
}
