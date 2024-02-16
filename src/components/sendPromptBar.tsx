"use client";
import { SendHorizontal } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import LoaderForPrompt from "@/Lottifies/LoaderForPrompt";
import toast from "react-hot-toast";
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
            const responseText =response.data.responseText
            setLoading(false)
            setPrompt("");
            if (responseText) {
              toast.success("Respond Successful")
            } else {
              toast.error("Server issue refresh")
            }
        } catch (error) {
            setLoading(false)
            setPrompt("");
            toast.error("Server issue")
        }
    }
  return (
    <div className="fixed w-full sm:w-8/12 bottom-6 px-2 ">
      <div className=" h-[40px] rounded-full  flex sm:w-full justify-start items-center bg-[#F8FAFC] w-10/12  p-1">
        <input
          className="text-center bg-[#0F172A] text-lg text-wrap  px-2 rounded-full  w-full h-[34px]"
          type="text"
          placeholder="Ask anything!"
          value={prompt}
          onChange={handleInputChange}
        />
        {loading? <LoaderForPrompt/> :<button onClick={handlePrompt}>
          <SendHorizontal className="cursor-pointer" color="#0F172A" />
        </button>}
      </div>
    </div>
  );
};

export default SendPromptBar;
