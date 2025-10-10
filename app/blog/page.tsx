import { resolve } from "path"


export default async function Blog() {

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
