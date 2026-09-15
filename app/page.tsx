import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1>Light It Red</h1>
          <p>Shedding light on NC State sports — news, takes, and Wolfpack pride.</p>
          <Link href="/contact" className="btn">
            Contact Me
          </Link>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="section">
          <h2>Latest Posts</h2>
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.slug} className="post-item">
                <Link href={`/posts/${post.slug}`} className="post-item-link">
                  <span className="tag">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p className="post-item-date">{formatDate(post.date)}</p>
                  <p>{post.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/posts" className="btn btn-outline-brick" style={{ marginTop: "32px" }}>
            All Posts
          </Link>
        </section>
      )}

      <section className="section section-dark">
        <h2>Go Pack!</h2>
        <p>
          Every fall, and winter, and spring, this is where the Wolfpack opinions go — win or
          lose. No hot-take mill, no manufactured outrage, just one fan&apos;s honest read on how
          the Pack is playing and what&apos;s coming next.
        </p>

        <div className="card-grid">
          <Link
            href="/posts"
            className="card"
            style={{ "--card-accent": "var(--brick)" } as React.CSSProperties}
          >
            <span className="tag">Football</span>
            <h3>Game Recaps</h3>
            <p>What happened, what it means, and what&apos;s next — after every game.</p>
          </Link>
          <Link
            href="/posts"
            className="card"
            style={{ "--card-accent": "var(--ink)" } as React.CSSProperties}
          >
            <span className="tag">Basketball</span>
            <h3>Season Previews</h3>
            <p>
              Where the Pack stands heading into football and basketball season, position by
              position.
            </p>
          </Link>
          <Link
            href="/posts"
            className="card"
            style={{ "--card-accent": "var(--brick-deep)" } as React.CSSProperties}
          >
            <span className="tag">Culture</span>
            <h3>Wolfpack Culture</h3>
            <p>
              Tailgate traditions, gameday tips, and everything that makes being a Pack fan worth
              it.
            </p>
          </Link>
        </div>
      </section>

      <section className="author-strip">
        <div className="author-strip-inner">
          <p>Written by Chris J — lifelong Wolfpack fan.</p>
          <Link href="/about">More about this site</Link>
        </div>
      </section>
    </>
  );
}
