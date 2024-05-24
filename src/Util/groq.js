import { Groq } from "groq-sdk"

const GROQ_API = import.meta.env.VITE_GROQ;

const groq = new Groq({
  apiKey: GROQ_API,
  dangerouslyAllowBrowser: true
});


export const requestTogroq = async (userInput) => {
    const replay = await groq.chat.completions.create({
        messages: [{
            role: "user",
            content: userInput,
        }],
        model: "llama3-8b-8192",
    });
    return replay.choices[0].message.content;
};