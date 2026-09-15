import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Light It Red",
};

export default function Contact() {
  return (
    <>
      <section className="page-header">
        <div className="page-header-inner">
          <h1>Contact Me</h1>
          <p>Got a take, a correction, or just want to talk Wolfpack sports?</p>
        </div>
      </section>

      <section className="section">
        <h2>Get In Touch</h2>
        <p>
          Whether it&apos;s a tip on a story, a correction on something I got wrong, or you just
          want to argue about who should be starting — I want to hear it. Drop a message below
          and I&apos;ll get back to you as soon as I can.
        </p>

        <ContactForm />
      </section>
    </>
  );
}
