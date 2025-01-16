"use client";
import { useState } from "react";
import "./Chat.css";

export default function Chat({ apiEndpoint, modelType }) {
  const [prompt, setPrompt] = useState("");
  const [promptSubmitted, setPromptSubmitted] = useState(false);
  const [promptResponse, setPromptResponse] = useState("");
  const [imageModel, setImageModel] = useState("dall-e-3");
  const [errorMessage, setErrorMessage] = useState("");
  const [showResponseContainer, setShowResponseContainer] = useState(false);

  const [risks, setRisks] = useState("");

  async function sendPrompt(e) {
    e.preventDefault();
    setPromptSubmitted(true);
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        body:
          modelType === "image-generation"
            ? JSON.stringify({ prompt, imageModel })
            : JSON.stringify({ prompt }),
      });
      const { promptResponseContent, splitRiskPoints } = await response.json();

      setPromptResponse(promptResponseContent);
      setRisks(splitRiskPoints);
      setShowResponseContainer(true);
    } catch (e) {
      setErrorMessage(
        "Looks like something went wrong, please try again in a bit."
      );
    }
    setPromptSubmitted(false);
  }

  return (
    <div className="full-width-container">
      <div className="container">
        <h1>{modelType === "image-generation" ? 'Generate an image' : 'Summarise some content'}</h1>
        {!showResponseContainer && (
          <>
          { modelType === "image-generation" ?
            <div>
              <p>
                Come up with a creative idea for an image and describe it in detail. Here’s an example:
              </p>
              <p>
                &quot;Create an image of a glowing castle floating above the clouds at sunset, with birds flying around it.&quot;
              </p>
            </div>
            :
            <div>
              <p>
                Enter some text from an article that you would like summarised. The text should be a few paragraphs long.
              </p>
            </div>
          }

            <form onSubmit={sendPrompt}>
            {modelType === "image-generation" && (
              <select
                className="select-model"
                value={imageModel}
                onChange={(e) => setImageModel(e.target.value)}
              >
                <option value="dall-e-2">dall-e-2</option>
                <option value="dall-e-3">dalle-e-3</option>
              </select>
            )}
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
                      alt="awaiting response"
                      src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
                      width={20}
                      height={20}
                    />
                  )}

                  {!promptSubmitted && (
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLineCap="round"
                        strokeLineJoin="round"
                        strokeWidth="2"
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
            <h2>Your prompt:</h2>
            <p> {prompt} </p>

            <h2>The response:</h2>
            <p>
              {promptResponse && modelType === "image-generation" && (
                <img alt="requested asset" className="ai-image" src={promptResponse} />
              )}

              {promptResponse && modelType === "summary" && (
                <p>{promptResponse}</p>
              )}
            </p>

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
