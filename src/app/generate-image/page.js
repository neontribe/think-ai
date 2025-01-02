"use client";
import { useState } from "react";
import "./page.css";

export default function SummariseEndPoint() {
  const [prompt, setPrompt] = useState("");
  const [promptSubmitted, setPromptSubmitted] = useState(false);
  const [promptResponse, setPromptResponse] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showResponseContainer, setShowResponseContainer] = useState(false);

  const [risks, setRisks] = useState("");

  async function sendPrompt(e) {
    e.preventDefault();
    setPromptSubmitted(true);
    try {
      const response = await fetch("/api/image", {
        method: "POST",
        body: JSON.stringify({ prompt }),
      });
      const { promptResponseContent, splitRiskPoints } = await response.json();

      setPromptResponse(promptResponseContent);
      setRisks(splitRiskPoints);
      setShowResponseContainer(true);
    } catch (e) {
      console.error(e);
      setErrorMessage(
        "Looks like something went wrong, please try again in a bit."
      );
    }
    setPromptSubmitted(false);
  }
  return (
    <div className="full-width-container">
      <div className="container">
        <h1>Generate an image</h1>
        {!showResponseContainer && (
          <>
            <p>
              Come up with a creative idea for an image and describe it in
              detail. Here’s an example: &quot;Create an image of a glowing
              castle floating above the clouds at sunset, with birds flying
              around it.&quot;
            </p>
            <form onSubmit={sendPrompt}>
              <label htmlFor="prompt">
                What would you like to ask Think AI today?
              </label>
              <div className="input-button-container">
                <textarea
                  id="prompt"
                  type="text"
                  required
                  value={prompt}
                  onChange={(e) => {
                    setPrompt(e.target.value);
                  }}
                ></textarea>
                <button type="submit">
                  {promptSubmitted && (
                    <img
                      src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
                      width={20}
                      height={20}
                    />
                  )}
                  {!promptSubmitted && (
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m9 5 7 7-7 7"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </>
        )}
        {showResponseContainer && (
          <>
            <p>Your prompt: {prompt}</p>
            {promptResponse && (
              <img className="ai-image" src={promptResponse} />
            )}

            <h2>But...</h2>
            <ol>
              {risks &&
                risks.map((risk, key) => {
                  if (risk) {
                    return <li key={key}>{risk}</li>;
                  }
                })}
            </ol>
          </>
        )}
      </div>
    </div>
  );
}
