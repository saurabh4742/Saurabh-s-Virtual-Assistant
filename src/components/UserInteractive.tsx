"use client"
import React, { useState } from "react";
import SendPromptBar from "@/components/sendPromptBar";
import PlusChatRoom from "@/components/PlusChatRoom";
import DIscussionPage from "@/components/DIscussionPage";
import BetaTesterVerify from "./BetaTesterVerify";
import { useMyContext } from "./Provider";
const UserInteractive = () => {
    const {isBetaTester,SocketId} =useMyContext()
  return (
    <div>
      {SocketId ? <>
        {isBetaTester? <><DIscussionPage />
      <PlusChatRoom />
      <SendPromptBar /></>:<BetaTesterVerify />}
      </>:<p className="flex justify-center m-4  text-xl text-[#F8FAFC]">Please wait while server comes online...</p>}
    </div>
  );
};

export default UserInteractive;
