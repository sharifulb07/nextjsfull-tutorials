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
