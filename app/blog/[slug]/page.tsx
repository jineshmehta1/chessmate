import { BLOG_POSTS } from "../blog-data"; // Import from the new neutral file
import PostDetailClient from "./PostDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  // This will now work because BLOG_POSTS is no longer "Client-only"
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <PostDetailClient post={post} />;
}