import { Comments } from "../data";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = Comments.find((comment) => comment.id === parseInt(id));
  if(!comment){
    return new Response("Comment is not Found ")
  }
  return new Response(JSON.stringify(comment));
}

export async function PATCH(req:Request, {params}:{params:Promise<{id:string}>}){

    const {id}=await params;
    const body=await req.json();
    const {comment}=body;
    const index=Comments.findIndex((comment)=>comment.id===parseInt(id))

    Comments[index].comment=comment;
    return new Response(JSON.stringify(Comments[index].comment))
}