"use client";

import PromptInput from "../components/PromptInput";

export default function SummariseEndPoint() {
  const apiEndpoint = "/api/text"; 

  return (
      <PromptInput
        apiEndpoint={apiEndpoint} 
        modelType="summary" 
        suggestedText="Paste your text here to summarise..."
        buttonText="Go" 
        onSubmit={(data) => console.log("Text Response:", data)}
      />
  );
}