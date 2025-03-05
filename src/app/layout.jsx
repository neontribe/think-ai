import './globals.css'
import Link from "next/link";

export const metadata = {
  title: "Think AI",
  description: "A platform that helps young people explore AI, and understand how to use it critically and safely.",
};

/* creates the default root layout */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-mono bg-blue-700 text-gray-100">
        <header className="p-2">
          <Link href="/" className="text-3xl">Think AI</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
