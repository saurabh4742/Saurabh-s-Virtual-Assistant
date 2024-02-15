"use client"
import SendPromptBar from "@/components/sendPromptBar";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "@/Lottifies/Loader";
interface Conversation {
  prompt: string;
  responseText: string;
}

interface Conversations {
  lastconversations: Conversation[];
}

export default function Home() {
  const [messages, setMessages] = useState<Conversations | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get("/api/gemini");
        const { conversationContext } = response.data;
        if (Array.isArray(conversationContext)) {
          setMessages({ lastconversations: conversationContext });
        } else {
          setMessages(null);
        }
        setLoading(false);
      } catch (error) {
        console.log("Something went wrong", error);
        setLoading(false);
      }
    };
  
    fetchChats();
  }, [messages]);
  

  return (
    <div className="flex justify-center w-full bg-[#0F172A]  text-[#020617] ">
      <div className="flex-none justify-center my-4 items-center min-h-screen pt-4 w-10/12 sm:w-8/12 bg-[#F8FAFC] border-1 shadow-lg border-[#020617]  rounded-3xl">
        <p className="flex justify-center text-center border-b-2 border-[#020617] rounded-b-md shadow-lg py-4">Saurabh Buddy HERE to Assist YOU!</p>
        <div className="flex-col justify-center w-full">
          <div className="flex-col w-full  justify-center pb-8">
            {loading ? ( 
              <Loader/>
            ) : messages && messages.lastconversations ? ( 
              messages.lastconversations.map((message, index) => (
                <div className="px-4" key={index}>
                  <div className="flex justify-start my-4 text-wrap">User: {message.prompt}</div>
                  <div className="flex justify-start my-4">AI: {message.responseText}</div>
                </div>
              ))
            ) : (
              <p>No messages found.</p> 
            )}
             <SendPromptBar/>
          </div>
         
        </div>
      </div>
    </div>
  );
}
