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
          body: JSON.stringify({ prompt }),
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

    )
}


