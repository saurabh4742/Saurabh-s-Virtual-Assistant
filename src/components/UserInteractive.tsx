"use client"
import React, { useState } from "react";
import SendPromptBar from "@/components/sendPromptBar";
import PlusChatRoom from "@/components/PlusChatRoom";
import DIscussionPage from "@/components/DIscussionPage";
import { useMyContext } from "./Provider";
import { Loader2 } from "lucide-react";
const UserInteractive = () => {
    const {SocketId} =useMyContext()
  return (
    <div>
      {SocketId ? <>
       <DIscussionPage />
      <PlusChatRoom />
      <SendPromptBar /></>
      :<p className="flex items-center justify-center m-4 text-center  text-lg text-[#F8FAFC]">Please wait while server comes online <span className="animate-spin"><Loader2/></span></p>}
    </div>
  );
};

export default UserInteractive;
