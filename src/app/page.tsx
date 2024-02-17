/* eslint-disable @next/next/no-img-element */
"use client";
import SendPromptBar from "@/components/sendPromptBar";
import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import Loader from "@/Lottifies/Loader";
import { motion } from "framer-motion";
import PlusChatRoom from "@/components/PlusChatRoom";
import NewLoader from "@/Lottifies/NewLoader";
import Notes from "@/components/Notes";
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
    <div className="flex justify-center w-full bg-[#0F172A]  text-[#F8FAFC] ">
      <div className="flex-none justify-center my-4 items-center min-h-screen pt-4 w-10/12 sm:w-8/12 border-1 shadow-lg   rounded-3xl">
      <div className="flex justify-center">
      <Suspense fallback={<NewLoader/>}>
      <img
      className="rounded-[50%] p-0.5 bg-[#F8FAFC]  border-2 border-[#64748B] shadow-xl"
        src="https://firebasestorage.googleapis.com/v0/b/image-test-b1876.appspot.com/o/SaurabhAnand111.jpeg?alt=media&token=4a860572-f344-48d4-9b74-511c75489783"
        alt="Avatar"
        height={80}
        width={80}
      />
      </Suspense>
      </div>
      <Notes/>
      <div>
      <div className="flex-none justify-center my-4 items-center min-h-screen pt-4 w-full bg-[#1E293B] border-1 shadow-lg border-[#020617]  rounded-3xl">
        <p className="flex justify-center  text-xl text-center border-b-2 border-[#020617] rounded-b-md shadow-lg py-4">
          Saurabh Buddy HERE to Assist YOU!
        </p>
        <div className="flex-col justify-center w-full">
          <div className="flex-col w-full justify-center overflow-x-hidden     pb-8">
            {loading ? (
              <Loader />
            ) : messages && messages.lastconversations ? (
              messages.lastconversations.map((message, index) => (
                <div className="px-4 text text-wrap" key={index}>
                  <div className="flex justify-start my-4   whitespace-pre-line">
                    <strong className="text-cyan-500 mr-2">You:</strong>{" "}
                    {message.prompt}
                  </div>
                  <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [1, 0.5, 1, , 0.5, 1] }}
                    transition={{ ease: "easeIn", duration: 0.2 }}
                    className="flex justify-start my-4 whitespace-pre-line"
                  >
                    <strong className="text-cyan-500 mr-5">AI:</strong>{" "}
                    {message.responseText}
                  </motion.div>
                </div>
              ))
            ) : (
              <p>No messages found.</p>
            )}
            <PlusChatRoom />
            <SendPromptBar />
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
