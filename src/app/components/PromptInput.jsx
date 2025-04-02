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
  const { registerValue, modalVisible } = useGlobalState();
  const [prompt, setPrompt] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Fixed models for text and image generation
  const textModel = 'gpt-4o';
  const imageModel = 'dall-e-3';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Prevent empty input
    if (!prompt.trim()) {
      setErrorMessage('Please enter a valid prompt.');
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

      if (response.ok) {
        throw new Error(response.error || 'Network response was not ok');
      }

      registerValue('modalVisible', false);

      const data = await response.json();
      registerValue('responseData', data);
      onSubmit(e);

    } catch (error) {
      let message = '';
      switch (error.code) {
        case 400:
        case 401:
        case 402:
        case 403:
        case 404:
        case 409:
        case 422: message = "The AI couldn't work with that request. Please try again.";
          break;
        case 429:
        case 500:
        case 502:
        case 503:
        case 504: message = "The AI isn't available right now. Please try again later.";
          break;
        default: message = "Something went wrong. Please try again later."
      }
      setErrorMessage(message);
      registerValue('modalMessage', message);
    }
  };

  return (
      <form onSubmit={handleSubmit} className='relative w-full md:w-[530px]'>
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


        {/* Submit Button */}
        <div className="flex justify-center md:justify-start mt-4">
        <RouteButton
          type='submit'
          variant='primary'
          className='mt-4 text-[#1B1806] font-normal justify-center md:justify-left'
          disabled={ modalVisible }
        >
          {buttonText}
        </RouteButton>
        </div>
      </form>
  );
}






