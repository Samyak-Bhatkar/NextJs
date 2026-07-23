import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html>
      <body className="min-h-full flex flex-col">
        <p className="w-full text-center text-4xl">Hello, From Chitrapat....</p>
        {children}
        </body>
    </html>
  );
}
