"use client";

import PromptInput from "../components/PromptInput";

export default function GenerateImageEndPoint() {
  const apiEndpoint = "api/image"; 
  
  return (
      <PromptInput
        apiEndpoint={apiEndpoint} 
        modelType="image-generation" 
        suggestedText="Describe the image you want to generate..."
        buttonText="Make Image" 
        onSubmit=""
      />
  );
}
