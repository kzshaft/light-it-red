import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Light It Red",
};

const FORM_ACTION = "https://formspree.io/f/mnpnavgk";

export default function Contact() {
  return (
    <>
      <section className="hero" style={{ padding: "64px 24px" }}>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Contact Me</h1>
        <p>Got a take, a correction, or just want to talk Wolfpack sports?</p>
      </section>

      <section className="section">
        <h2>Get In Touch</h2>
        <p>
          [Placeholder — a line or two on what kind of messages you want: tips, corrections,
          guest post pitches, etc. Let people know you&apos;ll get back to them.]
        </p>

        <form className="form" action={FORM_ACTION} method="POST">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit" className="btn" style={{ alignSelf: "flex-start" }}>
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
