"use client"
import React, { useState } from "react";
import SendPromptBar from "@/components/sendPromptBar";
import PlusChatRoom from "@/components/PlusChatRoom";
import DIscussionPage from "@/components/DIscussionPage";
import BetaTesterVerify from "./BetaTesterVerify";
const UserInteractive = () => {
    const [isBetaTester,SetIsBetaTester]=useState(false);
  return (
    <div>
      {isBetaTester? <><DIscussionPage />
      <PlusChatRoom />
      <SendPromptBar /></>:<BetaTesterVerify SetIsBetaTester={SetIsBetaTester} />}
    </div>
  );
};

export default UserInteractive;
