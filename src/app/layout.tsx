import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "Saurabh's Virtual Assistant",
  description: "Created by Saurabh Anand @copyright 2024",
};
import { MyContextProvider } from "@/components/Provider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyContextProvider>
        {children}
        <Toaster/>
        </MyContextProvider>
        
      </body>
    </html>
  );
}
