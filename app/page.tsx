import Counter from '@/components/Counter'
import React from 'react'

export default async function Home() {
const res= await fetch("http://localhost:3000/api/hello")
const data=await res.json();


  return (
    <div>
      <h1>Hello World </h1>
       <Counter />
       <p>Hello Message: {data.message}</p>
    </div>
  )
}
