"use client";
import { SendHorizontal } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import LoaderForPrompt from "@/Lottifies/LoaderForPrompt";
const SendPromptBar = () => {
    const [prompt,setPrompt]=useState("");
    const [loading,setLoading]=useState(false)
    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
       
        setPrompt(event.target.value);
      };
    const handlePrompt =async()=>{
        try {
            setLoading(true)
            const response=await axios.post("/api/gemini",{
                prompt: prompt
            })
            setLoading(false)
            setPrompt("");
            console.log("Done Generated")
        } catch (error) {
            setLoading(false)
            setPrompt("");
            console.log("error while sending")
        }
    }
  return (
    <div className="fixed w-full sm:w-8/12 bottom-6 px-2 ">
      <div className=" h-[40px] rounded-full  flex sm:w-full justify-start items-center w-10/12 bg-[#0F172A] p-1">
        <input
          className=" px-2 rounded-full w-full h-[34px]"
          type="text"
          placeholder="Ask anything!"
          value={prompt}
          onChange={handleInputChange}
        />
        {loading? <LoaderForPrompt/> :<button onClick={handlePrompt}>
          <SendHorizontal className="cursor-pointer" color="#F8FAFC" />
        </button>}
      </div>
    </div>
  );
};

export default SendPromptBar;
