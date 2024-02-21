"use client"
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

interface ContextType {
  isBetaTester:string | undefined;
  setisBetaTester: React.Dispatch<React.SetStateAction<string | undefined>>;
  SocketId: string | undefined;
  setSocketId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const MyContext = createContext({} as ContextType);

interface MyContextProviderProps {
  children: React.ReactNode;
}

export const MyContextProvider = ({ children }: MyContextProviderProps) => {
  const [isBetaTester, setisBetaTester] = useState<string | undefined>(undefined);
  const [SocketId, setSocketId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const Authorized = async () => {
      try {
        const res = await axios.get("/api/ekgandpereptapadanasadakpehagtafirega/key")
        if (res.data.KEY.key) {
          setisBetaTester(res.data.KEY.key);
        } else {
          setisBetaTester(undefined);
        }
      } catch (error) {
        console.log("ERROR404")
      }
    }
    Authorized();
  }, []);

  return (
    <MyContext.Provider value={{ isBetaTester, setisBetaTester, SocketId, setSocketId }}>
      {children}
      <Toaster />
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
