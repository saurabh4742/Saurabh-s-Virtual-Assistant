"use client"
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import io from 'socket.io-client'
const API_URL = 'https://svi-io.onrender.com'
const socket = io(API_URL,{autoConnect:false})
import { Primarystyle } from '@/toastTheme/Themedstyle'
import { useMyContext } from '@/components/Provider'
import axios from 'axios'
const RealtimeView = () => {
  const [views, setViews] = useState(0)
  const {setSocketId,isBetaTester,SocketId} =useMyContext()
  useEffect(() => {
    socket.connect()
    socket.on("connect", () => {
      setSocketId(socket.id)
    });
    
    socket.on("count", (count) => {
      setViews(count)
    })
    socket.on("joined",(id)=>{
      toast.success(`${id} Joined`,{style:Primarystyle.style, iconTheme:Primarystyle.iconTheme} )
    })
    socket.on("left",(id)=>
    [
      toast(`${id} Left`,{style:Primarystyle.style, iconTheme:Primarystyle.iconTheme,icon:"🏃"})
    ])
    
    return () => {
      socket.off("left")
      socket.off("count")
      socket.off("joined")
      socket.on("disconnect", (reason) => {
          toast.error("Left",Primarystyle)
        
        })
      
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SocketId])
  socket.on("connect", () => {
    setSocketId(socket.id)
  });
  return (
    <div className='flex justify-center'>
      {views} Instance{views > 1 && `${"s"}`} Of This AI Running Currently
    </div>
  )
}

export default RealtimeView