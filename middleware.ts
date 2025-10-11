import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // return NextResponse.redirect(new URL("/", req.url));

  // if (req.nextUrl.pathname === "/profile") {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }
  const response = NextResponse.next();
  const themePreference = req.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom-value man ");

  return response;
}

// export const config = {
//   matcher: "/profile",
// };
