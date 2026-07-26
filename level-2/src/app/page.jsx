// src/app/page.jsx
'use client'
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  
const [name, setname] = useState("RajniKanth")
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <p className="px-4 py-2">Level 2 Home</p>
      {/* ✅ Use the route path /movies instead of file system path */}
      <Link 
        href="/movies" 
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Movies
      </Link>
      {name}
    </div>
  );
}