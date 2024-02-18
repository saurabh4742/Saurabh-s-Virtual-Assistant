import NewLoader from "@/Lottifies/NewLoader";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useMyContext } from "./Provider";
const BetaTesterVerify = () => {
  const [loading, setLoading] = useState(false);
  const [Key, setKey] = useState("");
  const {setisBetaTester} =useMyContext()
  const handleKeyVerification = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "/api/ekgandpereptapadanasadakpehagtafirega/key",
        {
          Key
        }
      );
      setLoading(false);
      if (response.data.ok) {
        toast.success(`gambare gambare 🤖`);
        setisBetaTester(true);
        return;
      }
      toast.error("Invalid Key");
    } catch (error) {
      setLoading(false);
      toast.error("Server issue from key api");
    }
  };

  return (
    <div className="w-full flex justify-center text-center items-center my-4 px-2">
      <div className="">
        <label htmlFor="KEY" className="font-bold ">
          Beta Tester Key Verification
        </label>
        <div className="flex-none">
          {loading ? (
            <NewLoader />
          ) : (
            <>
              <input
                type="text"
                onChange={(e) => setKey(e.target.value)}
                name="Key"
                value={Key}
                placeholder="Enter Key"
                className="sm:w-[300px]   text-center rounded-full text-[#0F172A] shadow-lg border-4 border-[#0F172A] my-4"
              />
              <div className="flex justify-center ">
                <button
                  onClick={handleKeyVerification}
                  className="bg-[#0F172A] rounded-full shadow-lg px-4 my-1 py-2 hover:text-[#0F172A] hover:bg-[#F8FAFC] text-[#F8FAFC]"
                >
                  Get access
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BetaTesterVerify;
