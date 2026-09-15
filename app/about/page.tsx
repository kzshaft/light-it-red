import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Light It Red",
};

export default function About() {
  return (
    <>
      <section className="hero" style={{ padding: "64px 24px" }}>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>About Me</h1>
        <p>[Your name here] &middot; Lifelong Wolfpack fan</p>
      </section>

      <section className="section">
        <h2>Let&apos;s Get Acquainted</h2>
        <p>
          [Placeholder — introduce yourself. How did you become an NC State fan? What got you
          started writing about the Wolfpack? First-person, casual tone works best here.]
        </p>
        <p>
          [Placeholder — a second paragraph on what you cover and how often you post, so
          visitors know what to expect.]
        </p>
      </section>

      <section className="section section-dark">
        <h2>Stay in Touch</h2>
        <p>
          [Placeholder — invite people to reach out or follow along. Link to socials here once
          you have them, or point to the Contact page.]
        </p>
      </section>
    </>
  );
}
