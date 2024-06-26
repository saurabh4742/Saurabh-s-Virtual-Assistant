"use client";
import NewLoader from "@/Lottifies/NewLoader";
import { Primarystyle } from "@/toastTheme/Themedstyle";
import axios from "axios";
import { SquarePen} from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast/headless";
import { useMyContext } from "./Provider";

const PlusChatRoom = () => {
  const [loading, setLoading] = useState(false);
  const handlePLUS = async () => {
    let scid="svibeta1st"
    try {
      setLoading(true);
      const res = await axios.delete("/api/ekgandpereptapadanasadakpehagtafirega",{
        data: {
          scid
        }
      });
      setLoading(false);
        toast.success("New Chat Created",Primarystyle );
    } catch (error) {
      setLoading(false);
      toast.error("Server issue",Primarystyle );
    }
  };
  return (
    <div className="sticky flex justify-center w-full bottom-20 my-2 px-2">
      <div className=" h-[40px] rounded-full  flex text-sm  sm:w-full justify-center items-center  w-10/12">
        <div className="text-[Roboto] bg-[#F8FAFC] h-fit w-fit rounded-full hover:opacity-50 px-3 text-[#0F172A] shadow-lg py-2 border-2 border-[#0F172A]">
          {loading ? (
            <div className="flex justify-between items-center opacity-35  gap-2 h-10 w-10">
              <NewLoader />
            </div>
          ) : (
            <button
              onClick={handlePLUS}
              className=" flex justify-between items-center gap-2 "
            >
              Create New <SquarePen/>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlusChatRoom;


