
import { Comments } from "./data";

export async function GET(){
    return Response.json(Comments);
}