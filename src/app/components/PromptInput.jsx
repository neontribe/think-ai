"use client";

import { useState } from "react";
import ArrowButton from "./ArrowButton";

export default function PromptInput({ apiEndpoint, suggestedText, onSubmit}) {
    const [prompt, setPrompt] = useState("");
    const [promptSubmitted, setPromptSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        setPromptSubmitted(true);
        setErrorMessage("");
    
        try {
            const response = await fetch(apiEndpoint, {
              method: "POST",
              body:
                modelType === "image-generation"
                  ? JSON.stringify({ prompt, imageModel })
                  : JSON.stringify({ prompt }),
            });

        if(!response.ok) {
            throw new Error("Network reposnse was not ok");
        }

        const data = await response.json();
        onSubmit(data);
      } catch (errorMessage) {
        setErrorMessage(
          "Looks like something went wrong, please try again in a bit."
        );
      }
      setPromptSubmitted(false);
    }

    return (
        <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-md flex felc-col">
            <form onSubmit={handleSubmit}>
                <div className="relative">
                    <textarea
                    id="prompt"
                    className="w-full p-4 pr-12 rounded-2xl text-gray-700 placeholder-gray-500 px-6 py-3 w-[171px] h-[48px] text-lg inline-flex items-center justify-center"
                    placeholder={suggestedText}
                    maxLength={10000}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    ></textarea>
                    <div className="absolute right-4 top-1/2 transform-translate-y-1/2">
                    <ArrowButton />
                    </div>
                </div> 
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>

    );
};



