'use client';

import Header from "../components/Header";

export default function GroupLeadersPage() {
  return (<div>
    <Header hideLinks={false}/>
    <section className="flex flex-col items-center text-2xl bg-[#291498] pt-16 pb-16">
      <div className="w-2/3 space-y-8">
        <h1 className="text-5xl leading-[1.5] font-semibold text-white">
          Group Leader Guide for Using Real Chat AI with Young People
        </h1>
        <p>This guide will help you lead young people through the process of using this tool to generate either text or
          images. As you go through the tool, you’ll support the group in thinking critically about generative AI. There
          are four key pages in the tool, each with different activities and discussion points. Let&#39;s break it down
          to help you guide the group effectively.</p>
      </div>
    </section>
    <section className="flex flex-col items-center text-2xl pt-16 pb-16">
      <div className="w-2/3 space-y-8">
        <h2 className="text-3xl font-semibold text-white">Page 1: Choosing Whether to Generate Text or
          Image</h2>
        <p className="font-semibold text-[#63E2F1]">Objective: Help young people decide whether to generate text or an
          image.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Explain that they will have the choice to either generate text (this might be summarising an article,
            writing a poem, or asking ai a question) or an image (like artwork or a visual scene).
          </li>
          <li>Encourage them to think about what they would like to explore or create. Remind them that the goal is to
            think critically about AI while they use it.
          </li>
          <li>Ask open-ended questions to help them reflect on their choice:
            <ul className="list-disc pl-6 space-y-2">
              <li>Why do you want to create this?</li>
              <li>What would you like to learn from it?</li>
              <li>How do you Real Chat AI can help you create something new?</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="w-2/3 space-y-8">
        <h2 className="mt-8 mb-8 text-3xl leading-[1.5] font-semibold text-white">Page 2: Writing the Prompt and
          Thinking
          Critically</h2>
        <p className="font-semibold text-[#63E2F1]">Objective: Guide young people in crafting a good prompt and thinking
          critically about the issues they should
          consider.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Once they’ve chosen whether they want to generate text or an image, they will need to write a prompt (the
            idea or request that tells the AI what to create).
          </li>
          <li>Support them in coming up with ideas for their prompt using the &#34;expanders&#34; to help them consider
            why taking care over how their prompt is written is important.
          </li>
          <li>Encourage group discussion:
            <ul className="list-disc pl-6 space-y-2">
              <li>Ask participants to share their thoughts on whether the prompt could unintentionally reinforce harmful
                ideas or exclude certain groups.
              </li>
              <li>Use these questions to guide conversation:
                <ul className="list-disc pl-6 space-y-2">
                  <li>Is there a way to change this prompt to make it more inclusive?</li>
                  <li>What does this prompt say about the world we live in?</li>
                  <li>How might AI misinterpret the prompt based on stereotypes or bias?</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="w-2/3 space-y-8">
        <h2 className="mt-8 mb-8 text-3xl leading-[1.5] font-semibold text-white">Page 3: Viewing the AI Results and
          Reflecting
          Critically</h2>
        <p className="font-semibold text-[#63E2F1]">Objective: Help the group reflect on the AI’s output, focusing on
          critical thinking, bias, and
          stereotypes.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Once the young people have submitted their prompt, the AI will generate the result, either text or an
            image.
          </li>
          <li>Encourage Group Discussion:
            <ul className="list-disc pl-6 space-y-2">
              <li>Ask young people to share their thoughts on how the AI result might be influenced by bias or
                stereotypes. Explain these terms if unfamiliar with things like ‘bias, representation’.
              </li>
              <li>Key Questions to Discuss:
                <ul className="list-disc pl-6 space-y-2">
                  <li>Do you think the result reflects what you expected? Why or why not?</li>
                  <li>Could this result have been different if we had used a different prompt?</li>
                  <li>What changes could we make to the prompt to avoid these issues?</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="w-2/3 space-y-8">
        <h2 className="mt-8 mb-8 text-3xl leading-[1.5] font-semibold text-white">Page 4: Understanding AI’s Impact and
          Reflection</h2>
        <p className="font-semibold text-[#63E2F1]">Objective: Help young people understand the issues behind AI and
          reflect on what they’ve learned. <br/> Instructions for the Facilitator:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Review the AI result and its implications: The tool will highlight potential issues specific to the
            AI-generated content, such as bias or stereotypes in the slides.
          </li>
          <li>Encourage reflection on what they’ve learned about AI using this tool, with help from the expanders:
          </li>
          <li>Explore the articles and videos to learn more, or send them on after the session to young people who want
            to learn more.
          </li>
          <li>Final Thoughts: End with an open conversation, encouraging the young people to share their thoughts on the
            power of technology and their role in shaping it. Remind them that they are not just the consumers of
            technology but also its creators and critics.
          </li>
        </ul>
      </div>
    </section>
    <section className="flex flex-col items-center text-2xl pt-16 pb-16 bg-[#291498]">
      <div className="w-2/3 space-y-8">
        <p>Facilitator Tip: As you guide the group, always encourage open discussion. Let everyone share their opinions
          and ideas, and make sure the conversation stays respectful and inclusive. The goal is to empower young people
          to think critically about AI and its impact on the world around them.</p>

        <p>Thank you for leading this important discussion, and we hope this guide helps create an engaging, thoughtful,
          and reflective experience for everyone involved!</p>
      </div>
    </section>
  </div>);
};

