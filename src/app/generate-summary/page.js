"use client";
import { useState } from "react";
import "./page.css";

export default function SummariseEndPoint() {
  const [prompt, setPrompt] = useState("");
  const [promptResponse, setPromptResponse] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const [risks, setRisks] = useState("");
  const [promptSubmitted, setPromptSubmitted] = useState(false);
  const [showResponseContainer, setShowResponseContainer] = useState(false);

  async function sendPrompt(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/summary", {
        method: "POST",
        body: JSON.stringify({ prompt }),
      });
      const { promptResponseContent, splitRiskPoints } = await response.json();

      setPromptResponse(promptResponseContent);
      setRisks(splitRiskPoints);
      setShowResponseContainer(true);
    } catch {
      console.error(`Error: ${e}`);
      setErrorMessage(
        "Looks like something went wrong, please try again in a bit."
      );
    }
  }
  return (
    <div className="full-width-container">
      <div className="container">
        <h1>Generate a summary</h1>
        {!showResponseContainer && (
          <>
            <p>
              Take any piece of text—like a story, article, or speech—and sum it
              up into a short, clear explanation. Think of it like telling a
              friend what it’s about without all the extra details. Here’s an
              example: &quot;Summarise the plot of Macbeth in a sentence or
              two.&quot;It doesn’t have to be perfect—just focus on the key
              points. Try it now with any topic that interests you!
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
                <button
                  type="submit"
                  onClick={() => {
                    setPromptSubmitted(true);
                  }}
                >
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
            {promptResponse && <p>{promptResponse}</p>}

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
