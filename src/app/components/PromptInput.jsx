"use client";

import { useState } from "react";
import ArrowButton from "./ArrowButton";

export default function PromptInput({ apiEndpoint, suggestedText, onSubmit, modelType}) {
    const [prompt, setPrompt] = useState("");
    const [promptSubmitted, setPromptSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [imageModel, setImageModel] = useState("dall-e-3");
    const [showResponseContainer, setShowResponseContainer] = useState(false);
    const [risks, setRisks] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        setPromptSubmitted(true);
        setErrorMessage("");
    
        try {
            const response = await fetch(apiEndpoint, {
              method: "POST",
              headers: {"Content-type": "application/json"},
              body:
                modelType === "image-generation"
                  ? JSON.stringify({ prompt, imageModel })
                  : JSON.stringify({ prompt }),
            });

        if(!response.ok) {
            throw new Error("Network reposnse was not ok");
        }

        const { promptResponseContent, splitRiskPoints } = await response.json();
        setPromptResponse(promptResponseContent);
        setRisks(splitRiskPoints || []);
        setShowResponseContainer(true);
      } catch (errorMessage) {
        setErrorMessage(
          "Looks like something went wrong, please try again in a bit."
        );
      }
      setPromptSubmitted(false);
    }

    return (
        <div className="w-full max-w-lg bg-transparent flex flex-col space-y-4">
          <h1 className="text-white text-lg font-bold">
            {modelType === "image-generation" ? "Generate an image" : "Summarise some content"}
          </h1>
          {!showResponseContainer && (
            <>
              {modelType === "image-generation" ? (
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={imageModel}
                  onChange={(e) => setImageModel(e.target.value)}
                >
                  <option value="dall-e-2">DALL·E 2</option>
                  <option value="dall-e-3">DALL·E 3</option>
                </select>
              ) : null}
              <div className="relative">
                <textarea
                  id="prompt"
                  className="w-full p-4 pr-12 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500 shadow-sm"
                  placeholder={suggestedText}
                  maxLength={10000}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  required
                ></textarea>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <ArrowButton disabled={promptSubmitted} onClick={handleSubmit} />
                </div>
              </div>
            </>
          )}
          {showResponseContainer && (
            <div>
              <h2>Your Prompt</h2>
              <p>{prompt}</p>
      
              <h2>Response:</h2>
              {modelType === "image-generation" && promptResponse && (
                <img alt="Generated content" className="w-full rounded-lg shadow-md" src={promptResponse} />
              )}
            </div>
          )}
          {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
        </div>
      );
}      


// Add different instructions fori mage generation vs summary
// Implement the summary logic

// Complete the response display section
// Complete risk section, complete "your prompt" and response section

// Make the submit button functional and connet to API  -> 1- handleSubmit function to process form data; 2- connet API endpoints based on modelType


