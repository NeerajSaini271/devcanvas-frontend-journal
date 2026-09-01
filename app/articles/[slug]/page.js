import { notFound } from "next/navigation";
import ArticleContent from "@/components/articles/ArticleContent";
import { articles } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return article
    ? { title: article.title, description: article.excerpt }
    : { title: "Article not found" };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return <ArticleContent article={article} />;
}
