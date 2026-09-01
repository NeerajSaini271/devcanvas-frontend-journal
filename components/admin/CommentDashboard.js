"use client";

import { useMemo, useState } from "react";

const initialComments = [
  {
    id: 1,
    author: "Ava Reed",
    article: "Building calm interfaces",
    text: "The hierarchy checklist is immediately useful.",
    status: "Pending",
  },
  {
    id: 2,
    author: "Samir Rao",
    article: "Next.js route groups",
    text: "The route examples made the concept click for me.",
    status: "Approved",
  },
  {
    id: 3,
    author: "Jamie Lin",
    article: "React state boundaries",
    text: "Could you add an example using a modal workflow?",
    status: "Pending",
  },
  {
    id: 4,
    author: "Noah Bell",
    article: "Container queries",
    text: "A helpful alternative to adding more viewport breakpoints.",
    status: "Hidden",
  },
];

export default function CommentDashboard() {
  const [comments, setComments] = useState(initialComments);
  const [filter, setFilter] = useState("All");
  const [announcement, setAnnouncement] = useState("");

  const visible = useMemo(
    () =>
      comments.filter(
        (comment) => filter === "All" || comment.status === filter,
      ),
    [comments, filter],
  );

  function update(comment, status) {
    setComments((current) =>
      current.map((item) =>
        item.id === comment.id ? { ...item, status } : item,
      ),
    );
    setAnnouncement(
      `${comment.author}'s comment is now ${status.toLowerCase()}.`,
    );
  }

  return (
    <div>
      <p className="sr-only" role="status" aria-live="polite">
        {announcement}
      </p>
      <div className="dashboard-toolbar">
        <div>
          <span className="eyebrow">Content review</span>
          <h1>Comment moderation</h1>
          <p>Review article feedback and update its session-only status.</p>
        </div>
        <div className="filter-group" aria-label="Filter comments">
          {["All", "Pending", "Approved", "Hidden"].map((item) => (
            <button
              key={item}
              type="button"
              className={
                filter === item ? "topic-button active" : "topic-button"
              }
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {visible.length ? (
        <div className="comment-list">
          {visible.map((comment) => (
            <article className="comment-card" key={comment.id}>
              <div className="comment-avatar" aria-hidden="true">
                {comment.author[0]}
              </div>
              <div className="comment-content">
                <div className="comment-title-row">
                  <div>
                    <h2>{comment.author}</h2>
                    <p>{comment.article}</p>
                  </div>
                  <span
                    className={`status status-${comment.status.toLowerCase()}`}
                  >
                    {comment.status}
                  </span>
                </div>
                <blockquote>{comment.text}</blockquote>
                <div className="comment-actions">
                  {comment.status === "Pending" && (
                    <button
                      type="button"
                      onClick={() => update(comment, "Approved")}
                    >
                      Approve
                    </button>
                  )}
                  {comment.status !== "Hidden" && (
                    <button
                      type="button"
                      onClick={() => update(comment, "Hidden")}
                    >
                      Hide
                    </button>
                  )}
                  {comment.status === "Hidden" && (
                    <button
                      type="button"
                      onClick={() => update(comment, "Pending")}
                    >
                      Restore
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No {filter.toLowerCase()} comments</h2>
          <p>Choose another status to continue reviewing feedback.</p>
        </div>
      )}
    </div>
  );
}
