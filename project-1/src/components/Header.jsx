'use client';
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';
const Header = () => {
  const pathname = usePathname();
  return (
     <header>
          <div className="text-3xl px-3 text-red-600 bg-amber-50 py-4" >
            <nav className="flex justify-between items-center">
              <h1 className="text-6xl">Chitrapat</h1>
              <ul className="flex justify-between w-1/2">

                <li> <Link href={"/about"}  className={pathname=="/about"?"text-blue-500":""}>About</Link> </li>
                <li> <Link href={"/contact"} className={pathname=="/contact"?"text-blue-500":""}>Contact Us</Link> </li>
                <li> <Link href={"/Places"}  className={pathname=="/Places"?"text-blue-500":""}>Login</Link> </li>
                <li> <Link href={"/"} className={pathname=="/"?"text-blue-500":""}>Home</Link> </li>

              </ul>
            </nav>
          </div>
        </header>
  )
}

export default Header