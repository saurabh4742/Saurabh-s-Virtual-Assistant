// import { GoogleGenerativeAI } from '@google/generative-ai';
// // GoogleGenerativeAI required config
// const configuration = new GoogleGenerativeAI(`${process.env.GEMINI_API_KEY}`);
import { GoogleGenAI} from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
// Model initialization
//const modelId = "gemini-pro"; not work anymore
// const modelId = "gemini-1.5-pro-002";
// const model = configuration.getGenerativeModel({ model: modelId });

//These arrays are to maintain the history of the conversation
const conversationContext: any[][] = [];
const currentMessages: { role: string; parts: any; }[] = [];

export {ai,currentMessages,conversationContext}