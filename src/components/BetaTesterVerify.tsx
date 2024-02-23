import NewLoader from "@/Lottifies/NewLoader";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useMyContext } from "./Provider";
import { Primarystyle } from "@/toastTheme/Themedstyle";
const BetaTesterVerify = () => {
  const [loading, setLoading] = useState(false);
  const [Key, setKey] = useState("");
  const { setisBetaTester, SocketId } = useMyContext();
  const handleKeyVerification = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "/api/ekgandpereptapadanasadakpehagtafirega/key",
        {
          Key,
        }
      );
      setLoading(false);
      if (response.data.ok) {
        toast.success(`gambare gambare 🤖`, Primarystyle);
        setisBetaTester(Key);
        return;
      }
      toast.error("Invalid Key", Primarystyle);
    } catch (error) {
      setLoading(false);
      toast.error("Server issue from key api", Primarystyle);
    }
  };

  return (
    <div className="w-full flex justify-center text-center items-center my-4 px-2">
      {SocketId ? (
        <div className="">
          <label htmlFor="KEY" className="font-bold ">
            Key Verification
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
                <div className="flex-none">
                  <div className="flex justify-center ">
                    <button
                      onClick={handleKeyVerification}
                      className="bg-[#0F172A] rounded-full shadow-lg px-4 my-1 py-2 hover:text-[#0F172A] hover:bg-[#F8FAFC] text-[#F8FAFC]"
                    >
                      Get access
                    </button>
                  </div>
                  <div className="flex justify-center">
                  <a href="/buyprivatekey" className="flex justify-center w-fit  cursor-pointer hover:border-b-2 hover:border-b-[#F8FAFC] my-2">
                    Want a private key? Buy now.
                  </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <p className="flex justify-center m-4  text-xl text-[#F8FAFC]">
          Please wait while server comes online...
        </p>
      )}
    </div>
  );
};

export default BetaTesterVerify;
