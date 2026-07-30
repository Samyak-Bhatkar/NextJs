  'use client';
  import Image from "next/image";
  import Link from "next/link"
  import { Icon, TvMinimal } from 'lucide-react';
  import { TvMinimalPlay} from 'lucide-react';
  import { Popcorn} from 'lucide-react';
import { useRouter } from "next/navigation";

  export default function Home() {
      const router = useRouter();
    const contactMethod = [
      {name:"Twitter",Icon:TvMinimal},
            {name:"Youtube",Icon:TvMinimalPlay},
                  {name:"Linkedin",Icon:Popcorn},
    ]
    return (
  <div className="justify-center items-center flex-1 flex text-2xl flex-col ">
  <h1 className="text-4xl ">Choose which method you want to use for the contacts</h1>
  <div className="flex gap-10 m-3">
    {contactMethod.map(({name,Icon},index)=>(
      <div key= {index} className="bg-red-200 h-30 w-35 rounded items-center flex justify-center hover:scale-105 duration-1200 transition-all hover:bg-red-500" onClick={()=>router.push(`/contact/${name}`)}><Icon/>{name}</div>
    ))}
  
  </div>
  </div>
    );
  }
