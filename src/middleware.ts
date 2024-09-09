import { auth } from "@/auth";

export default auth(async (req) => {
  const { nextUrl } = req;
  const token = req?.auth?.accessToken;
  if (!req?.auth) return Response.redirect(new URL("/auth/login", nextUrl));
  if (!token) return Response.redirect(new URL("/auth/login", nextUrl));
  if (token && !token.startsWith("Bearer "))
    return Response.redirect(new URL("/auth/login", nextUrl));
  return;
});

export const config = {
  matcher: ["/users/:path*"],
};

// export { auth as middleware } from "./auth";
