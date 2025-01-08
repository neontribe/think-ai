Think AI is a platform where young people can input prompts for tasks like image generation and text summarization. It uses the OpenAI API to generate responses and informs users of potential risks and reliability.

## Getting Started

To run the development server:

```bash
npm run dev

```
## OpenAI

An OpenAI API key is required. If you don’t have one, log in to OpenAI and create a key here: https://platform.openai.com/settings/organization/api-keys. Add it to your .env file with OPENAI_API_KEY = "".

OpenAI is a pay-as-you-go service. If the API isn’t working, check your usage here: https://platform.openai.com/settings/organization/usage.

### Endpoints

This project uses two OpenAI endpoints:

- Image generation: [docs](https://platform.openai.com/docs/guides/images) (code: src/app/api/image)

- Text generation: [docs](https://platform.openai.com/docs/guides/text-generation) (code: src/app/api/summary/route.js)

When successful, you’ll see a log like:
POST /api/summary 200 in 7484ms

## Hosting

Hosted on Vercel: https://think-ai-opal.vercel.app
