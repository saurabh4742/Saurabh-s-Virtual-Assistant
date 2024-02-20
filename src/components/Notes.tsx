import { AlertTriangle, DatabaseZap, NotebookPen, ShieldAlert } from "lucide-react";
import React from "react";

const Notes = () => {
  return (
    <div className="sm:flex flex-none gap-2 sm:overflow-x-hidden text-sm">
      <div
        className="bg-[#1E293B] border-l-4   rounded-3xl my-2 border-emerald-500 text-emerald-500 p-4"
        role="alert"
      >
        <p className="font-bold"><DatabaseZap color="#10B981" />Database</p>
        <p className="text-[#F8FAFC]">Support us-
          <strong className="text-md">Use Create New</strong> if using <span className="text-md font-bold underline">Private Key</span>, before leaving the app
        </p>
      </div>
      <div
        className="bg-[#1E293B] border-l-4   rounded-3xl my-2 border-red-500 text-red-700 p-4"
        role="alert"
      >
        <p className="font-bold"><AlertTriangle color="#DC2626" /></p>
        <p className="text-[#F8FAFC]">
          <strong className="text-[11px]">Create New</strong>, will
          erase you previous data.
        </p>
      </div>
      <div
        className="bg-[#1E293B] border-l-4  rounded-3xl my-2 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <p className="font-bold"><ShieldAlert color="#F97316" /></p>
        <p className="text-[#F8FAFC] ">
          Please do not share your personal details or any other sensitive
          information on this website.
        </p>
      </div>

      <div
        className="bg-[#1E293B]   border-l-4 my-2 rounded-3xl border-yellow-500 text-yellow-700 p-4"
        role="alert"
      >
        <p className="font-bold"><NotebookPen color="#EAB308" /></p>
        <p className="text-[#F8FAFC]">
          If you experience server issues after 20 or more conversations, please
          submit a new assistance request.
        </p>
      </div>
    </div>
  );
};

export default Notes;
