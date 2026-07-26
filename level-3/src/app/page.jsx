'use client'
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <>
    
    <div className="flex justify-between">
      <div className="text-4xl font-bold text-center w-1/4">
      Chitrapat
    </div >
      <ul className="flex justify-between w-1/2 items-center px-3">
        <Link href="/"><li>Home</li></Link>
        <Link href="/movies"><li>Movies</li></Link>
        <Link href="/new"><li>New and Popular</li></Link>
        <Link href="/form"><li>Form</li></Link>
      </ul>
      <button className="bg-white text-black font-bold px-2 rounded hover:bg-amber-400 text-xl active:scale-95 transition-transform duration-200 ease-in-out hover:scale-105" onClick={()=>router.push("/about")}>Go to Movies</button>
    </div></>
  );
}
