import { NextRequest, NextResponse } from "next/server";

//NextRequest NextResponse 
export async function GET(){
  return NextResponse.json({
    name:"Ayush",
    age:45
})
}

export async function POST(request:NextRequest){
  let {name, age} = await request.json();
  return NextResponse.json({
    name,age
  })
}

