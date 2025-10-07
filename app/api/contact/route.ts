
export async function POST(req:Request){
    const data=await req.json()
    console.log(`data is : ${data.msg}`)
    return JSON.stringify({status:'Ok'})
}