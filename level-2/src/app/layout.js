import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export default function RootLayout({ children,admin,template}) {
  return (
    <html>
      <body className="h-screen flex flex-col w-screen bg-red-400">
        <p className="w-full text-center text-4xl">Hello, From Chitrapat....</p>
        <div className="flex w-screen  h-screen text-3xl text-black font-bold" >
 <div className="bg-amber-500 w-1/3">{children}</div>
 <div className="bg-amber-300 w-1/3">{admin}</div>
 <div className="bg-amber-800 w-1/3">{template}</div>

        </div>
        </body>
    </html>
  );
}
