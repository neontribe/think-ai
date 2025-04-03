'use client';

import { useGlobalState } from '@/app/contexts/GlobalStateProvider';

export default function ModalDemo() {
  const { registerValue } = useGlobalState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Start a timer to show the modal after 2 seconds
    const timer = setTimeout(() => {
      registerValue('modalVisible', true);
    }, 500);

    try {
      // Simulate API call (replace with your actual OpenAI API call)
      const simulatedResponse = await new Promise((resolve) => {
        setTimeout(() => {
          resolve('This is the response from OpenAI.');
        }, 5000);
      });
    } catch (error) {
    } finally {
      clearTimeout(timer);
      registerValue('modalVisible', false);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <p>press to test the modal behaviour</p>
      <button
        type="button"
        onClick={(e) => {
          return handleSubmit(e);
        }}
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit
      </button>
    </div>
  );
}
