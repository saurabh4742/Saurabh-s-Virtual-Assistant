/* eslint-disable @next/next/no-img-element */
"use client"
import NewLoader from '@/Lottifies/NewLoader'
import React, { Suspense } from 'react'

const TitleAndCopyright = () => {
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
       </div>
  )
}

export default TitleAndCopyright