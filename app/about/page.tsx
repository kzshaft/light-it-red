import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Light It Red",
};

export default function About() {
  return (
    <>
      <section className="hero" style={{ padding: "64px 24px" }}>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>About Me</h1>
        <p>Chris J &middot; Lifelong Wolfpack fan</p>
      </section>

      <section className="section">
        <h2>Let&apos;s Get Acquainted</h2>
        <p>
          Welcome to Light It Red — a home for NC State sports takes, recaps, and Wolfpack pride.
          This started as a way to keep track of my own reactions to every game and turned into
          something worth sharing: no filler, no manufactured hot takes, just honest thoughts on
          how the Pack is doing.
        </p>
        <p>
          Expect recaps after every game, a few predictions before kickoff or tip-off, and the
          occasional rant when the refs earn it. New posts go up as the season happens — check
          back often, or reach out and tell me what you want to see covered.
        </p>
      </section>

      <section className="section section-dark">
        <h2>Stay in Touch</h2>
        <p>
          Got a take of your own, a correction, or just want to talk Wolfpack sports? Head to the
          Contact page and send a message — I read everything.
        </p>
      </section>
    </>
  );
}
