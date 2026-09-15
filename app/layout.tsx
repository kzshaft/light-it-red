import type { Metadata } from "next";
import { Geist, Big_Shoulders } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bigShoulders = Big_Shoulders({
  variable: "--font-display",
  weight: ["700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Light It Red | NC State Sports",
  description: "Shedding light on NC State sports — news, takes, and Wolfpack pride.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${bigShoulders.variable}`}>
      <body>
        <header className="site-header">
          <nav className="site-nav">
            <Link href="/" className="brand">
              Light It Red
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/posts">Posts</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <p>
            &copy; {new Date().getFullYear()} Light It Red. Go Pack!
          </p>
        </footer>
      </body>
    </html>
  );
}
