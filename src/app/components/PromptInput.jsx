"use client";

import { useState } from "react";
import RouteButton from "./RouteButton";

export default function PromptInput({
  apiEndpoint,  // API route ("/apy/text", or "api/image")
  suggestedText,
  modelType, // "image-generation" or "summary"
  buttonText,
  onSubmit,
}) {
  const [prompt, setPrompt] = useState("");
  const [promptResponse, setPromptResponse] = useState(null);
  const [promptSubmitted, setPromptSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [risks, setRisks] = useState([]);
  const [showResponseContainer, setShowResponseContainer] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setPromptSubmitted(true);
    setErrorMessage("");
    setPromptResponse(null);
    setRisks([]); 

    // Prevent empty input
    if (!prompt.trim()) {
      setErrorMessage("Please enter a valid prompt.");
      setPromptSubmitted(false);
      return;
    }

     const requestBody = JSON.stringify(
       modelType === "image-generation"
         ? { prompt, imageModel } // DALL-e-3 for images
         : { prompt, textModel } // gpt-4o for text summarisation
     );

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: requestBody,
      });


      const data = await response.json();
      setPromptResponse(data.promptResponseContent);
      setRisks(data.splitRiskPoints || []);
      setShowResponseContainer(true);
      onSubmit(data);
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later.");
    }

    setPromptSubmitted(false);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#2218A4]">
      <form onSubmit={handleSubmit} className="relative w-[700px]">
        {/* Input Box */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center relative">
          <textarea
            id="prompt"
            className="w-full text-gray-600 text-lg placeholder-gray-500 bg-transparent border-none focus:ring-0 outline-none resize-none"
            placeholder={suggestedText}
            maxLength={10000}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            required
          ></textarea>
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm text-center mt-2">
            {errorMessage}
          </p>
        )}

        {/* Submit Button */}
        <RouteButton
          type="button"
          variant="secondary"
          className="mt-4"
          disabled={promptSubmitted}
        >
          {buttonText}
        </RouteButton>
      </form>

      {/* Response Section */}
      {showResponseContainer && (
        <div>
        <h2>Your Prompt:</h2>
        <p>{prompt}</p>

        <h2>Response:</h2>
        <div>
          {promptResponse && modelType === "image-generation" && (
            <img
              alt="requested asset" 
              className="ai-image"
              src={promptResponse}
            />
          )}
          {promptResponse && modelType === "summary" && (
            <p className="ai-text">{promptResponse}</p>
          )}
        </div>
         
          {/* Risk Mitigation Section */}
          {risks.length > 0 && (
            <>
            <h2>But...</h2>
              <ol>
                {risks.map((risk, index) => (
                  <li key={index}>{risk}</li>
                ))}
              </ol>
            </>
          )}
        </div>
      )}
    </div>
  );
}



// Complete the response display section
// Complete risk section, complete "your prompt" and response section

// Make the submit button functional and connet to API  -> 
// 1- handleSubmit function to process form data; 
// 2- connet API endpoints based on modelType


