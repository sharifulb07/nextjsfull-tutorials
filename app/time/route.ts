export const dynamic = "force-static";
export const revalidate = 5;
export async function GET() {
  return Response.json(`Time: ${new Date().toLocaleTimeString()}`);
}
