// middleware.ts
import { NextResponse } from "next/server";
import { auth } from "@/app/auth";

export default auth((req, ctx) => {
  const isLoggedIn = !!req.auth;
  const isAuthPage =
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/signup");

  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  if (!isLoggedIn && req.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Always return a `void` or `Response` type
  return NextResponse.next(); // Ensure compatibility by returning `NextResponse.next()`
});

// Optionally configure middleware to only run on specific paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
