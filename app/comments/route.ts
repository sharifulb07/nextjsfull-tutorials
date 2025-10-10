import { Comments } from "./data";

export async function GET() {
  return Response.json(Comments);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newComment = {
    id: Comments.length + 1,
    comment: body.comment,
  };

  Comments.push(newComment);
  return new Response(JSON.stringify(newComment));
}
