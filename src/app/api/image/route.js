import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { prompt } = await request.json();
    if (!prompt) {
      throw Error("No prompt provided");
    }
    const promptResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    const promptResponseContent = promptResponse.data[0].url;

    const responseRisks = await openai.chat.completions.create({
      messages: [
        {
          role: "developer",
          content: `Can you give me 3 potential risks of this response you generated using the openai api image generation endpoint when it comes to safeguarding and risks associated with AI specific to the answer to ${prompt}. Please make the answer specific to the prompt that has been given. Make sure to always Include the new line character at the end of every point apart from the last in order to distinguish between my points so i can extract each point into a list element in html and don't give me any other copy apart from those points. Please ensure there are no added spaces when not needed.Please ensure there are no added spaces when not needed. I don't want any number or dash before each point just start the point. `,
        },
      ],
      model: "gpt-4o",
    });

    const responseRisksContent = responseRisks.choices[0].message.content;
    const splitRiskPoints = responseRisksContent.split("\n");

    return Response.json({ promptResponseContent, splitRiskPoints });
  } catch (e) {
    return Response.status(500);
  }
}
