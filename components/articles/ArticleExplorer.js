"use client";

import { useMemo, useState } from "react";
import ArticleCard from "@/components/articles/ArticleCard";

export default function ArticleExplorer({ articles, topics }) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return articles.filter((article) => {
      const topicMatches = topic === "All" || article.topic === topic;
      const queryMatches =
        !normalized ||
        `${article.title} ${article.excerpt} ${article.author}`
          .toLowerCase()
          .includes(normalized);
      return topicMatches && queryMatches;
    });
  }, [articles, query, topic]);

  return (
    <section className="section" aria-labelledby="latest-heading">
      <div className="section-heading row-heading">
        <div>
          <span className="eyebrow">Fresh perspectives</span>
          <h2 id="latest-heading">Latest articles</h2>
        </div>
        <label className="search-control">
          <span className="sr-only">Search articles</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
          </svg>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles"
          />
        </label>
      </div>
      <div className="topic-list" aria-label="Filter articles by topic">
        {topics.map((item) => (
          <button
            key={item}
            type="button"
            className={topic === item ? "topic-button active" : "topic-button"}
            onClick={() => setTopic(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {filtered.length ? (
        <div className="article-grid">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No matching articles</h3>
          <p>Try another keyword or choose a different topic.</p>
        </div>
      )}
    </section>
  );
}
