'use client'
import { useRouter, redirect } from "next/navigation"

export default function Order(){
    const router=useRouter();

    const handleOrder=()=>{
        console.log("Order Placing Now ")
        // router.push('/about');
        redirect('/');

    }
    return(
        <div>
            <h3>You are going to place order now </h3>
            <button onClick={handleOrder}> Place Order </button>

        </div>
    )
}