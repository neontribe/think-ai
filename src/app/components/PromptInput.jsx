'use client';

import { useState } from 'react';
import RouteButton from './RouteButton';
import {useGlobalState} from '@/app/contexts/GlobalStateProvider';

export default function PromptInput({
  apiEndpoint,  // API route ('/api/summary', or 'api/image')
  suggestedText,
  modelType, // 'image-generation' or 'summary'
  buttonText,
  onSubmit,
}) {
  const { registerValue } = useGlobalState();
  const [prompt, setPrompt] = useState('');
  const [promptSubmitted, setPromptSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Fixed models for text and image generation
  const textModel = 'gpt-4o';
  const imageModel = 'dall-e-3';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPromptSubmitted(true);
    setErrorMessage('');

    // Prevent empty input
    if (!prompt.trim()) {
      setErrorMessage('Please enter a valid prompt.');
      setPromptSubmitted(false);
      return;
    }

     const requestBody = JSON.stringify(
       modelType === 'image-generation'
         ? { prompt, imageModel } // DALL-e-3 for images
         : { prompt, textModel } // gpt-4o for text summarisation
     );

    try {
      registerValue('modalVisible', true);

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: requestBody,
      });

      if (!response.ok) {
        throw new Error(response.error || 'Network response was not ok');
      }

      const data = await response.json();
      registerValue('responseData', data);
    } catch (error) {
      setErrorMessage(error.message || 'Something went wrong. Please try again later.');
    } finally {
      registerValue('modalVisible', false);
      setPromptSubmitted(false);
      onSubmit(e);
    }
  };

  return (
    // <div className='flex flex-col justify-center items-center min-h-screen bg-[#1C0080]'>
      <form onSubmit={handleSubmit} className='relative w-[700px]'>
        {/* Input Box */}
        <div className='bg-white rounded-2xl shadow-lg p-6 flex items-center relative'>
          <textarea
            id='prompt'
            className='w-full text-gray-600 text-lg placeholder-gray-500 bg-transparent border-none focus:ring-0 outline-none resize-none'
            placeholder={suggestedText}
            maxLength={10000}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            required
          ></textarea>
        </div>

        {errorMessage && (
          <p className='text-red-500 text-sm text-center mt-2'>
            {errorMessage}
          </p>
        )}

        {/* Submit Button */}
        <RouteButton
          type='submit'
          variant='primary'
          className='mt-4 text-[#1B1806] font-normal'
          disabled={promptSubmitted}
        >
          {buttonText}
        </RouteButton>
      </form>
    // </div>
  );
}






