import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Light It Red</h1>
        <p>Shedding light on NC State sports — news, takes, and Wolfpack pride.</p>
        <Link href="/contact" className="btn">
          Contact Me
        </Link>
      </section>

      <section className="section">
        <h2>Go Pack!</h2>
        <p>
          [Placeholder — replace with your own intro. A couple sentences on what this site covers:
          game recaps, recruiting buzz, tailgate traditions, whatever your angle is. Say why
          people should keep coming back.]
        </p>

        <div className="card-grid">
          <div className="card">
            <h3>[Topic One]</h3>
            <p>[Placeholder — e.g. Football recaps and analysis after every game.]</p>
          </div>
          <div className="card">
            <h3>[Topic Two]</h3>
            <p>[Placeholder — e.g. Basketball season previews and player spotlights.]</p>
          </div>
          <div className="card">
            <h3>[Topic Three]</h3>
            <p>[Placeholder — e.g. Where to watch, tailgate tips, gameday traditions.]</p>
          </div>
        </div>

        <p className="placeholder-note">
          This is draft copy for lightitred.com. Swap in real text, then let me know if you want a
          real photo of the Belltower (or anything else) swapped in for the hero background.
        </p>
      </section>
    </>
  );
}
