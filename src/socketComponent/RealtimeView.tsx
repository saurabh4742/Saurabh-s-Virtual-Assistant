"use client"
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import io from 'socket.io-client'
const API_URL = 'https://svi-io.vercel.app/'
const socket = io(API_URL, { autoConnect: false })

const RealtimeView = () => {
  const [views, setViews] = useState(0)
  useEffect(() => {
    socket.connect()
    socket.on("count", (count) => {
      setViews(count)
      toast.success("Be Cautious You are Not Alone Here")
    })
    return () => {
      toast.remove("Someone left ")
      socket.disconnect()
    }
  }, [])
  return (
    <div className='flex justify-center'>
    {views} Instance{views>1 && `${"s"}`} Of This AI Running Currently
    </div >
  )
}
export default RealtimeView
