import "./page.css";

export default function Home() {
  return (
    <div className="full-width-container">
      <div className="constrained-width-container">
        <h1>
          <span>Welcome to</span> <span>Think AI</span>{" "}
        </h1>
        <p>
          To use Think AI, simply type in any prompt—whether it’s a question, a
          creative idea, or a practical task. The more details you include, the
          better the AI can tailor its response to your needs. Once you’re
          ready, press the Submit button to see how Think AI can help bring your prompt to life!
        </p>
        <h2>AI can...</h2>
        <div className="options-container">
          <a href="/generate-summary">
            <h3>Summarise content</h3>
          </a>

          <a href="/generate-image">
            <h3>Generate an image</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
