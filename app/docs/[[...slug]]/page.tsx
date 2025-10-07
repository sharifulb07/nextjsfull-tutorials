
export default async function Docs(
    {params}:
    {params:Promise<{slug:string[]}>}
){

    const {slug}=await params;
    if(slug?.length==2){
        return <h1>viewing docs from features {slug[0]} and conceptId {slug[1]} </h1>
    }else if(slug?.length==1){
        return(
            <div>
                viewing docs from features {slug[0]}
            </div>
        )
    }else{
        return <h1>there is a sample docs now </h1>
    }

  
}