import { type NextRequest } from "next/server";

import { headers, cookies } from "next/headers";

export async function GET(req:NextRequest){
    // const customHeaders=new Headers(req.headers);
    // console.log(customHeaders.get("Authorization"))
    const headerList=await headers();
    console.log(headerList.get("Authorization"))

    const cookieStore=await cookies();
    cookieStore.set("RequestPerRate", "150")
    console.log(cookieStore.get("RequestPerRate"))
return new Response("<h1>Profile Api Data</h1>",{
    headers:{
        "Content-Type":"text/html",
        "Set-Cookie":"theme=dark"
    }
})
}