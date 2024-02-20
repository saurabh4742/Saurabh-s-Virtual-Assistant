"use client";
import { SendHorizontal } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import LoaderForPrompt from "@/Lottifies/LoaderForPrompt";
import toast from "react-hot-toast";
import { Primarystyle } from "@/toastTheme/Themedstyle";
import { useMyContext } from "./Provider";
const SendPromptBar = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const {SocketId,isBetaTester} =useMyContext()
  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPrompt(event.target.value);
  };
  const handlePrompt = async () => {
    let id =SocketId

if (isBetaTester.startsWith('p')) {
    id = isBetaTester;
  }    try {
      setLoading(true);
      const response = await axios.post("/api/ekgandpereptapadanasadakpehagtafirega", {
        prompt: prompt,scid:id
      });
      const responseText = response.data.responseText;
      setLoading(false);
      setPrompt("");
      if (responseText) {
        toast.success("Respond Successful",Primarystyle );
      } else {
        toast.error("Server issue refresh",Primarystyle );
      }
    } catch (error) {
      setLoading(false);
      setPrompt("");
      toast.error("Server issue");
    }
  };
  return (
    <div className="fixed w-full sm:w-8/12 bottom-6 px-2 ">
      <div className="h-[40px] rounded-full  flex sm:w-full justify-start items-center bg-[#F8FAFC] w-10/12  p-1">
        <textarea
          className="text-center scrollbar-none overflow-hidden scroll-smooth bg-[#0F172A] text-lg text-wrap  px-2 rounded-full  w-full h-[34px] "
          placeholder="Ask anything!"
          value={prompt}
          onChange={handleInputChange}
        />

        {loading ? (
          <LoaderForPrompt />
        ) : (
          <button onClick={handlePrompt}>
            <SendHorizontal className="cursor-pointer" color="#0F172A" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SendPromptBar;
