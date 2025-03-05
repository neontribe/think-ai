import OffsiteLinkButton from './components/OffsiteLinkButton.jsx';
import ToggleButton from './components/ToggleButton.jsx';

export default function Home() {
  return (
    <div className="full-width-container">
      <div className="constrained-width-container">
        <h1>
          <span>Welcome to</span> <span>Think AI</span>{" "}
        </h1>
        <p>
        To use Think AI, simply type in any prompt, whether it’s a question, a creative idea, or a practical task. The more details you include, the better the AI can tailor its response to your needs. Once you’re ready, press the Submit button to see how Think AI can help bring your prompt to life, while also encouraging you to think critically about the reliability and safety of the results it provides.
        </p>
        <h2>AI can...</h2>
        <div className="options-container">
          <a href="/generate-summary">
            <h3>Summarise content</h3>
          </a>

          <a href="/generate-image">
            <h3>Generate an image</h3>
          </a>
          {/* Hidden description for screen readers */}
          <p id='offsite-link-description' className='sr-only'>
            This link opens in a new tab.
          </p>
          <OffsiteLinkButton href="https://www.google.co.uk/?client=safari&channel=mac_bm" variant="default" className="mt-4">Scribbr</OffsiteLinkButton>
          <OffsiteLinkButton href="https://www.google.co.uk/?client=safari&channel=mac_bm" variant="learnMore" className="mt-4 ml-4">Video</OffsiteLinkButton>
          <OffsiteLinkButton href="https://www.google.co.uk/?client=safari&channel=mac_bm" variant="findOut" className="mt-4 ml-4">Find Out</OffsiteLinkButton>
        </div>
        <div>
          <h1 className='text-white text-xl mb-4'>Toggle Demo</h1>
          <ToggleButton labelLeft='Individual' labelRight='Group'/>'
        </div>
      </div>
    </div>
  );
}
