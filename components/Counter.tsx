
'use client'

import { useState } from "react"

export default function(){
    const [count, setCount]=useState(0);

    return (
        <div>
        <p>{count} </p>
         <button onClick={()=>setCount(c=>c+1)}>Add</button>
         <button onClick={()=>setCount(c=>c-1)}>minus</button>
        </div>
    )
}