/* eslint-disable @next/next/no-img-element */
"use client"
import NewLoader from '@/Lottifies/NewLoader'
import PrivateKey from '@/Lottifies/PrivateKey'
import Footer from '@/components/Footer'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <div className='flex justify-center w-full bg-[#0F172A]  text-[#F8FAFC] min-h-screen items-center'>
      <div className='flex-none w-full justify-center'>
      
        <p className=" w-full flex mt-2 text-center justify-center text-xl px-4 ">
       Feature currently available for developers only.....
        </p>
        <div className='flex justify-center'>
        <div className='sm:w-4/12 mb-6 sm:h-4/12'>
        <Suspense fallback={<NewLoader/>}>
        <PrivateKey/>
        </Suspense>
        </div>
        </div>

        <div className='fixed bottom-0 w-full'>
        <Footer/> 
        </div>
      </div>
      
    </div>
  )
}

export default Page