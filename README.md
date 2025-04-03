`Real Chat AI` is a platform where young people can input prompts for tasks like image generation and text summarization. It uses the OpenAI API to generate responses and informs users of potential risks and reliability around those requests with specific reference to the content of the request.

## Generative AI backend

This application wraps responses from generative AI, specifically OpenAI's API.

An OpenAI API key is required. If you don’t have one, log in to OpenAI and create a key here: https://platform.openai.com/settings/organization/api-keys. Add it the following to your .env file:

```
OPENAI_API_KEY=<key>
```

OpenAI is a pay-as-you-go service. If the API isn’t working, check your usage here: https://platform.openai.com/settings/organization/usage.

## Getting Started

You may use [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) to manage the correct version of node

```bash
nvm install && nvm use
```

If you don't have [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable), you may try to fetch it with:

```bash
corepack enable
```

Pull the packages

```bash
yarn install
```

To run the development server:

```bash
next dev
```

## Hosting

This application was developed to be hosted on [Vercel](https://vercel.com/): 

https://realchatai.vercel.app

Modification may be required to run it elsewhere.

## Licensing

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg

## Copyright

This application was written by [Neontribe Ltd](https://www.neontribe.co.uk) for the National Citizen Service Trust. 

Copyright © 2025 NCS

National Citizen Service Trust is a not-for-profit organisation incorporated by Royal Charter and established to shape, support, champion and lead a thriving National Citizen Service. National Citizen Service Trust is registered in England and Wales with Royal Charter Body number RC000894. Our registered office is at National Citizen Service Trust, 1st Floor, 48 Chancery Lane, London, WC2A 1JF.
