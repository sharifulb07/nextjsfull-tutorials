import { type NextRequest } from "next/server";

import { headers } from "next/headers";

export async function GET(req:NextRequest){
    // const customHeaders=new Headers(req.headers);
    // console.log(customHeaders.get("Authorization"))
    const headerList=await headers();
    console.log(headerList.get("Authorization"))
return new Response("<h1>Profile Api Data</h1>",{
    headers:{
        "Content-Type":"text/html"
    }
})
}