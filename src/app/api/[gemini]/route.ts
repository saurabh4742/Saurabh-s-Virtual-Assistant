import { NextRequest, NextResponse } from "next/server";
import { model } from "../../../gemini-secure/gemini";
import { CurrentMessage, ConversationContext } from "@/models/chat";
import "@/gemini-secure/db";
export async function POST(req: NextRequest,context:any) {
  try {
    const {params}=context
    if (params.gemini!=process.env.SECURITY_KEY) {
      return new NextResponse(JSON.stringify({Authorization:false ,Behaviour:"Illegal Activity Detected From The Client"}))
    }
    const { prompt } = await req.json();

    const contextFromDB = await ConversationContext.findOne();

    let conversationContext: { prompt: string; responseText: string }[] =
      contextFromDB ? contextFromDB.lastconversations : [];

    const currentMessageFromDB = await CurrentMessage.findOne();

    let currentMessages: { role: string; parts: string }[] =
      currentMessageFromDB ? currentMessageFromDB.history : [];

    for (const { prompt, responseText } of conversationContext) {
      currentMessages.push({ role: "user", parts: prompt });
      currentMessages.push({ role: "model", parts: responseText });
    }
    const chat = model.startChat({
      history: currentMessages,
      generationConfig: {
        maxOutputTokens:1000,
      },
    });

    const result = await chat.sendMessage(prompt);
    const response = result.response;
    const responseText = response.text();

    conversationContext.push({ prompt, responseText });

    await ConversationContext.findOneAndUpdate(
      {},
      { lastconversations: conversationContext },
      { upsert: true }
    );

    await CurrentMessage.findOneAndUpdate(
      {},
      { history: currentMessages },
      { upsert: true }
    );

    return new NextResponse(JSON.stringify({ success: true, responseText }));
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ success: false, message: "An error occurred" })
    );
  }
}

export async function GET(req:NextRequest,context:any) {
  try {
    const {params}=context
    if (params.gemini!=process.env.SECURITY_KEY) {
      return new NextResponse(JSON.stringify({Authorization:false ,Behaviour:"Illegal Activity Detected From The Client"}))
    }
      
    const contextFromDB = await ConversationContext.findOne();

    let conversationContext: { prompt: string; responseText: string }[] =
      contextFromDB ? contextFromDB.lastconversations : [];

    const currentMessageFromDB = await CurrentMessage.findOne();

    let currentMessages: { role: string; parts: string }[] =
      currentMessageFromDB ? currentMessageFromDB.history : [];

      return new NextResponse(JSON.stringify({conversationContext}))
  } catch (error) {
    return new NextResponse(JSON.stringify({error:"Error while requesting"}))
  }
}
export async function DELETE(req:NextRequest,context:any) {
  try {
    const {params}=context
    if (params.gemini!=process.env.SECURITY_KEY) {
      return new NextResponse(JSON.stringify({Authorization:false ,Behaviour:"Illegal Activity Detected From The Client"}))
    }
    await ConversationContext.deleteOne()
    await CurrentMessage.deleteOne()
    return new NextResponse(JSON.stringify({success:true}),{
      status:200
    })
  } catch (error) {
    return new NextResponse(JSON.stringify({success:false}),{
      status:500
    })
  }
}
