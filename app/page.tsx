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
          Every fall, and winter, and spring, this is where the Wolfpack opinions go — win or
          lose. No hot-take mill, no manufactured outrage, just one fan&apos;s honest read on how
          the Pack is playing and what&apos;s coming next.
        </p>

        <div className="card-grid">
          <div className="card">
            <h3>Game Recaps</h3>
            <p>What happened, what it means, and what&apos;s next — after every game.</p>
          </div>
          <div className="card">
            <h3>Season Previews</h3>
            <p>
              Where the Pack stands heading into football and basketball season, position by
              position.
            </p>
          </div>
          <div className="card">
            <h3>Wolfpack Culture</h3>
            <p>
              Tailgate traditions, gameday tips, and everything that makes being a Pack fan worth
              it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
