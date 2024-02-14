import { GoogleGenerativeAI } from '@google/generative-ai';
// GoogleGenerativeAI required config
const configuration = new GoogleGenerativeAI(`${process.env.GEMINI_API_KEY}`);

// Model initialization
const modelId = "gemini-pro";
const model = configuration.getGenerativeModel({ model: modelId });

//These arrays are to maintain the history of the conversation
const conversationContext: any[][] = [];
const currentMessages: { role: string; parts: any; }[] = [];

export {model,currentMessages,conversationContext}