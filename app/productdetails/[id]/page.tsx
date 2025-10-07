
import type { Metadata } from "next";

export  async function generateMetadata({params}:{params:{id:string}}) {
    const id=await params.id;
    return{
        title:`Product ${id}`,
        description:`Details about product ${params.id}`
    }
    
}

export default async function({params}:{params:{id:string}}){
    
    return(
        <div>
            <h2>Product # {params.id}</h2>
        </div>
    )
}