"use client"
import React, { useState } from "react";
import SendPromptBar from "@/components/sendPromptBar";
import PlusChatRoom from "@/components/PlusChatRoom";
import DIscussionPage from "@/components/DIscussionPage";
import BetaTesterVerify from "./BetaTesterVerify";
import { useMyContext } from "./Provider";
const UserInteractive = () => {
    const {isBetaTester} =useMyContext()
  return (
    <div>
      {isBetaTester? <><DIscussionPage />
      <PlusChatRoom />
      <SendPromptBar /></>:<BetaTesterVerify />}
    </div>
  );
};

export default UserInteractive;
