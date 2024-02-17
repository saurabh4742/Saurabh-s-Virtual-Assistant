"use client"
import Loader from '@/Lottifies/Loader';
import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
interface Conversation {
    prompt: string;
    responseText: string;
  }
  
  interface Conversations {
    lastconversations: Conversation[];
  }
const DIscussionPage = () => {
    const [messages, setMessages] = useState<Conversations | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get("/api/ekgandpereptapadanasadakpehagtafirega");
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
    <>
    {loading ? (
        <Loader />
      ) : messages && messages.lastconversations ? (
        messages.lastconversations.map((message, index) => (
          <div className="px-4 text text-wrap" key={index}>
            <div className="flex justify-start my-4  whitespace-pre-line">
              <strong className="text-cyan-500 mr-2">You:</strong>
              <div className=" overflow-auto">{message.prompt}</div>
            </div>
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [1, 0.5, 1, , 0.5, 1] }}
              transition={{ ease: "easeIn", duration: 0.2 }}
              className="flex justify-start my-4 whitespace-pre-line "
            >
              <strong className="text-cyan-500 mr-5">AI:</strong><div className=" overflow-auto">{message.responseText}</div>
            </motion.div>
          </div>
        ))
      ) : (
        <p>No messages found.</p>
      )}
    </>
  )
}

export default DIscussionPage