// import './page.css';
import './globals.css'
import Link from "next/link";

export const metadata = {
  title: "Think AI",
  description: "A platform that helps young people explore AI, and understand how to use it critically and safely.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/" className="logo">Think AI</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
