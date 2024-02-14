"use client"

import axios from "axios";
import { useEffect, useState } from "react";
interface Conversation {
  prompt: string;
  responseText: string;
}

interface LastConversations {
  lastconversations: Conversation[];
}
export default function Home() {
  const [messages, setMessages] = useState<LastConversations | null>(null);

  useEffect(() => {
    const FetchChats = async () => {
      try {
        const response = await axios.get("/api/gemini");
        const conversationContext = response.data.conversationContext as LastConversations;
        setMessages(conversationContext);
        console.log(conversationContext)
      } catch (error) {
        console.log("Something went wrong");
      }
    };    

    FetchChats();
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className="flex-none justify-center my-4 items-center w-6/12">
        <p className="flex justify-center text-center">Your Assistant is HERE!</p>
        <div className="flex-col justify-center">
          <div className="flex-col w-full justify-center">
            {messages && messages.lastconversations ? (
              messages.lastconversations.map((message, index) => (
                <div key={index}>
                  <div className="flex justify-start my-4 text-wrap">User: {message.prompt}</div>
                  <div className="flex justify-end my-4">AI: {message.responseText}</div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
