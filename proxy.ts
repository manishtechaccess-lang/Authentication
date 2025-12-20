import next from "next";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { resourceUsage } from "process";

// This function can be marked `async` if using `await` inside
export default function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const privatePath = ["/Profile"];
  const publicPath = ["/Login", "/Signup"];

  const token = request.cookies.get("token")?.value || "";

  if (publicPath.includes(path) && token) {
    // user is login and user is still in login page or signup page then redirect the user to profile page
    return NextResponse.redirect(new URL("/Profile", request.url));
  }

  if (privatePath.some((route) => path.startsWith(route)) && !token) {
    // user is not authanticated and user is try to access the private paths so redirect the user to signup page
    return NextResponse.redirect(new URL("/Signup", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/", "/Profile", "/Profile/:path", "/Login", "/Signup"],
};
