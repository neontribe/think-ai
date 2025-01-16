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
    const promptResponse = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Can you summarise this text: ${prompt}. Return a paragraph without line characters or bullet points.`,
        },
      ],
      model: "gpt-4o",
    });

    const promptResponseContent = promptResponse.choices[0].message.content;

    const responseRisks = await openai.chat.completions.create({
      messages: [
        {
          role: "developer",
          content: `Can you give me 3 potential risks of this response you generated to the request when it comes to safeguarding and risks associated with AI specific to the answer to ${prompt}:  ${promptResponseContent}. Importantly don't use numerical list format or dash format, just start the point. Make sure to always Include the new line character at the end of every point apart from the last in order to distinguish between my points so i can extract each point into a list element in html and don't give me any other copy apart from those points. Please ensure there are no added spaces when not needed. `,
        },
      ],
      model: "gpt-4o",
    });

    const responseRisksContent = responseRisks.choices[0].message.content;

    const splitRiskPoints = responseRisksContent.split("\n");

    return Response.json({ promptResponseContent, splitRiskPoints });
  } catch (e) {
    throw Error (e.message);
  }
}
