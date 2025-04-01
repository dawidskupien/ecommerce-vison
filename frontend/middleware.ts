import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { auth } = req;
  const { pathname } = req.nextUrl;

  if(!auth && pathname === "/profile") {
    return NextResponse.redirect(new URL("/login", req.url))
  }
  if(auth && ["/register", "/login"].includes(pathname)) {
    return NextResponse.redirect(new URL("/profile", req.url))
  }
})

export const config = {
    matcher: ['/login', "/profile", "/register"],
  }