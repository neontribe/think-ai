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
          content: `Can you give me 3 potential risks associated with the use of the OpenAI API image generation endpoint, specifically focusing on safeguarding and AI-related risks tied to the answer generated from the following prompt: ${prompt}? Please ensure the response is tailored to this specific prompt. Each risk should be clearly outlined, with a new line character separating each point, except for the last one, so I can easily extract them into an HTML list. Avoid adding extra spaces where unnecessary. I don't want any number or dash before each point just start the point.`,
        },
      ],
      model: "gpt-4o",
    });

    const responseRisksContent = responseRisks.choices[0].message.content;
    const splitRiskPoints = responseRisksContent.split("\n");

    return Response.json({ promptResponseContent, splitRiskPoints,  modelType: 'image-generation' });
  } catch (e) {
    throw Error (e.message);
  }
}
