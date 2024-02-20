/* eslint-disable @next/next/no-img-element */
"use client"
import NewLoader from '@/Lottifies/NewLoader'
import React, { Suspense } from 'react'
import { useMyContext } from './Provider'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Primarystyle } from '@/toastTheme/Themedstyle'
const TitleAndCopyright = () => {
  const {isBetaTester,setisBetaTester} =useMyContext()
  const handleLogout=async()=>{
    try {
      const response = await axios.delete(
        "/api/ekgandpereptapadanasadakpehagtafirega/key"
      );
      if(response.data.ok){
        toast.success(`sayonara 👋`,Primarystyle );
        setisBetaTester(undefined);
        return;
      }
    } catch (error) {
      toast.error("server issue",Primarystyle );
    }
  }
  return (
    <div className="flex-none border-b-2 border-[#020617] rounded-b-md shadow-lg  p-4">
       <p className="flex justify-center  text-3xl text-center  py-4 ">
       Saurabh&apos;s Virtual Assistant!
        </p>
        <div className="flex justify-center">
      <Suspense fallback={<NewLoader/>}>
      <div className="flex gap-4 justify-center items-center text-sm">
      <img
      className="rounded-[50%] p-0.5 inset-full  border-2 border-[#64748B] shadow-xl"
        src="https://firebasestorage.googleapis.com/v0/b/image-test-b1876.appspot.com/o/SaurabhAnand111.jpeg?alt=media&token=4a860572-f344-48d4-9b74-511c75489783"
        alt="Avatar"
        height={60}
        width={60}
      />
      <p>&copy;2024 Saurabh Anand All rights reserved.</p>
      </div>
      </Suspense>
      </div>
      {isBetaTester && <div className="flex justify-center ">
                <button
                  onClick={handleLogout}
                  className=" border-4 border-[#0F172A] rounded-full shadow-lg px-4 my-1 py-2 hover:text-[#F8FAFC] hover:bg-[#0F172A] bg-[#F8FAFC] text-[#0F172A]"
                >
                  Sign out
                </button>
              </div>}
       </div>
  )
}

export default TitleAndCopyright