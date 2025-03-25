'use client';

import {useGlobalState} from '@/app/contexts/GlobalStateProvider';

export default function ModalDemo() {
  const {registerValue} = useGlobalState();

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Start a timer to show the modal after 2 seconds
    const timer = setTimeout(() => {
      registerValue('modalVisible', true);
      console.log('Modal enabled');
    }, 500);

    try {
      // Simulate API call (replace with your actual OpenAI API call)
      const simulatedResponse = await new Promise((resolve) => {
        setTimeout(() => {
          console.log('resolving "request"');
          resolve('This is the response from OpenAI.');
        }, 5000);
      });
      console.log(simulatedResponse);
    } catch (error) {
      console.log('Error retrieving response.');
    } finally {
      clearTimeout(timer);
     registerValue('modalVisible', false);
      console.log('Modal disabled');
    }
  };

  return (
    <div className='min-h-screen p-8'>
      <p>press to test the modal behaviour</p>
      <button type='button' onClick={(e) => {
        return handleSubmit(e);
      }} className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'>
        Submit
      </button>
    </div>
  );
}
