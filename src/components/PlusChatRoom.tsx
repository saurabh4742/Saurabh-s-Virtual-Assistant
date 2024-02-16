import axios from "axios";
import { PlusCircle } from "lucide-react";
import React from "react";
import toast from "react-hot-toast/headless";

const PlusChatRoom = () => {
  const handlePLUS=async()=>{
      try {
        const res=await axios.delete("/api/gemini")
        if(res.status==200)
        {
          toast.success("New Chat Created")
        }
        else{
          toast.error("Api call issue")
        }
      } catch (error) {
        toast.error("Server issue")
      }
  }
  return (
    <div className="fixed sm:w-8/12 w-full bottom-20 mb-2 px-2">
      <div className=" h-[40px] rounded-full  flex sm:w-full justify-center items-center  w-10/12">
        <div className="">
          <button onClick={handlePLUS} className="bg-[#F8FAFC]  rounded-full hover:opacity-50">
            <PlusCircle className="w-16 h-16" color="#0F172A" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlusChatRoom;
