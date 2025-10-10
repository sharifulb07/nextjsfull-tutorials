import { resolve } from "path"
import { notFound } from "next/navigation"

function getRandomInt(count:number){
  return Math.floor(Math.random()*count);
}


export default async function Blog() {

    const realNum=getRandomInt(2);
    if(realNum==1){
      throw new Error("Error Loadig Review...")
    }

  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('Intentionally delay! ')
    },2000)
  })

  return (
    <div>
      Blog
    </div>
  )
}
