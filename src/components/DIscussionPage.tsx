"use client";
import Loader from '@/Lottifies/Loader';
import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useMyContext } from './Provider';

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
  const { isBetaTester, SocketId } = useMyContext();

  useEffect(() => {
    const fetchChats = async () => {
      let scid = "svibeta1st";
      try {
        const response = await axios.get(`/api/ekgandpereptapadanasadakpehagtafirega?scid=${scid}`);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : messages && messages.lastconversations ? (
        messages.lastconversations.map((message, index) => (
          <div className="px-4 text text-wrap" key={index}>
            <div className="flex justify-start my-4 whitespace-pre-line">
              <strong className="text-cyan-500 mr-2">You:</strong>
              <div className="overflow-auto prose prose-sm dark:prose-invert">
                <ReactMarkdown>{message.prompt}</ReactMarkdown>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [1, 0.5, 1, 0.5, 1] }}
              transition={{ ease: "easeIn", duration: 0.2 }}
              className="flex justify-start my-4 whitespace-pre-line"
            >
              <strong className="text-cyan-500 mr-5">AI:</strong>
              <div className="overflow-auto prose prose-sm dark:prose-invert">
                <ReactMarkdown>{message.responseText}</ReactMarkdown>
              </div>
            </motion.div>
          </div>
        ))
      ) : (
        <p>No messages found.</p>
      )}
    </>
  );
};

export default DIscussionPage;
