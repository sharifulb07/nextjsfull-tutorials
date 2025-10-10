import { type NextRequest } from "next/server";
import { Comments } from "./data";

export async function GET(req: NextRequest) {
  const searchParams = await req.nextUrl.searchParams;
  const query = await searchParams.get("query");
  const filteredComment = query
    ? Comments.filter((comment) => comment.comment.includes(query))
    : Comments;

  return Response.json(filteredComment);
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
