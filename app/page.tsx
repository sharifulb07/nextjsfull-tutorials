import Link from "next/link"


export default async function Home() {


  return (
    <div>
      <Link href={'/about'}>About</Link>
      <Link href={'/blog'}>Blog Website</Link>

      <h3>This is shariful story now </h3>
     
      
    </div>
  )
}
