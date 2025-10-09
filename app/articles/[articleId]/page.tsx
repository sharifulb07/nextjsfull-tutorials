'use client'
import Link from "next/link"

import { use } from "react"

export default function Article(
    {params, searchParams}:{
        params:Promise<{articleId:string}>;
        searchParams:Promise<{lang?:'en'| 'hr' | 'fr'}>;
    }
){
    const {articleId}=use(params);
    const {lang='en'}=use(searchParams);

    return(
        <div>
            <h2>Article Number is {}</h2>
            <p>You are reading article in {lang}</p>

            <Link href={`/articles/${articleId}?lang='en`}>English</Link>
            <Link href={`/articles/${articleId}?lang='hr'`}>Spanish</Link>
            <Link href={`/articles/${articleId}?lang='fr'`}>French</Link>
        </div>
    )
}









// server component

// import Link from "next/link";

// export default async function Article(
//     {params, searchParams}:{
//         params:Promise<{articleId:string}>;
//         searchParams:Promise<{lang?:'en' | 'hr' |'fr'}>;
//     }
// ){
//     const {articleId}=await params;
//     const {lang='en'}=await searchParams;

//     return(
//         <div>
//             <h1>News article Number {articleId}</h1>
//             <p>You are read article in {lang}</p>

//             <Link href={`/articles/${articleId}?lang='en`}>English</Link>
//             <Link href={`/articles/${articleId}?lang='hr`}>Spanish</Link>
//             <Link href={`/articles/${articleId}?lang='fr`}>French</Link>
//         </div>
//     )
// }