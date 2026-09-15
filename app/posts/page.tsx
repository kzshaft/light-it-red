import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Posts | Light It Red",
};

export default function Posts() {
  const posts = getAllPosts();

  return (
    <>
      <section className="page-header">
        <div className="page-header-inner">
          <h1>Posts</h1>
          <p>Game recaps, previews, and everything else — newest first.</p>
        </div>
      </section>

      <section className="section">
        {posts.length === 0 ? (
          <p>No posts yet — check back soon.</p>
        ) : (
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.slug} className="post-item">
                <Link href={`/posts/${post.slug}`} className="post-item-link">
                  <span className="tag">{post.category}</span>
                  <h2>{post.title}</h2>
                  <p className="post-item-date">{formatDate(post.date)}</p>
                  <p>{post.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
