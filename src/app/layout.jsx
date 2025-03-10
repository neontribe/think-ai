// server side component

import './globals.css'
import {GlobalStateProvider} from "@/app/contexts/GlobalStateProvider";
import Link from "next/link";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: "swap",
});

export const metadata = {
  title: "Think AI",
  description: "A platform that helps young people explore AI, and understand how to use it critically and safely.",
};

/* creates the default root layout */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-blue-700 text-gray-100">
        <GlobalStateProvider>
          <header className="p-2">
            <Link href="/" className="text-3xl">Think AI</Link>
          </header>
          {children}
        </GlobalStateProvider>
      </body>
    </html>
  );
}
