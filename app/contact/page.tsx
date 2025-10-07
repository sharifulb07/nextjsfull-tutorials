
'use client'

import { useState } from "react"

export default function ContactPage(){

    const [msg, setMsg]=useState('')

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        const res= await fetch('http://localhost:3000/api/contact', {
            method:"POST",
            body:JSON.stringify({msg})
        })
        setMsg('');

    }
    return(
        <form onSubmit={handleSubmit}>
            <input value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder="Message"/>
            <button type='submit'>submit</button>
            
        </form>
    )
}