"use client"
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
interface ContextType {
  isBetaTester: boolean;
  setisBetaTester: React.Dispatch<React.SetStateAction<boolean>>;
}
export const MyContext = createContext({} as ContextType);
interface MyContextProviderProps {
  children: React.ReactNode;
}
export const MyContextProvider = ({ children }: MyContextProviderProps) => {
  
  const [isBetaTester, setisBetaTester] = useState<boolean>(false);
  useEffect(()=>{
    const Authorized=async()=>{
      try {
        const res=await axios.get("/api/ekgandpereptapadanasadakpehagtafirega/key")
        if(res.data.authorized){
          setisBetaTester(true);
          return 
        }
      } catch (error) {
        console.log("ERROR404")
      }
    }
    Authorized()
  })
  return (
    <MyContext.Provider value={{ isBetaTester, setisBetaTester }}>
      {children}
      <Toaster/>
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);