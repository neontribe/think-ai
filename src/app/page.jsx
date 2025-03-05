import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="full-width-container">
      <div className="constrained-width-container">
        <h1>
          <span>Welcome to</span> <span>Think AI</span>
        </h1>
        <Link href="/process/query">Start</Link>
      </div>
    </div>
  );
}
