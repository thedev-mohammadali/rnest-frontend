import { NextRequest, NextResponse } from "next/server";
import env from "./config/env";
import { refreshSession } from "./services/auth/auth.server";

export const proxy = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname === "/login" || pathname === "/register";

  const isHomePage = pathname === "/";

  const isPropertiesPage = pathname.startsWith("/properties");

  const isDashboard = pathname.startsWith("/dashboard");

  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  if (isAuthPage && accessToken) {
    const callbackUrl = request.nextUrl.searchParams.get("callbackUrl");

    if (callbackUrl && isSafeCallbackUrl(callbackUrl)) {
      return NextResponse.redirect(new URL(callbackUrl, request.url));
    }

    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!isAuthPage && !isDashboard && !isHomePage && !isPropertiesPage) {
    return NextResponse.next();
  }

  if (!accessToken && !refreshToken) {
    if (isDashboard) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  }

  if (accessToken) {
    const backendRes = await fetch(`${env.apiUrl}/auth/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    if (backendRes.ok) {
      if (isAuthPage) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }

      return NextResponse.next();
    }

    if (backendRes.status !== 401) {
      return NextResponse.next();
    }
  }

  if (refreshToken) {
    const cookieHeader = request.headers.get("cookie") ?? "";

    const refreshRes = await refreshSession(cookieHeader);

    if (refreshRes) {
      const response = NextResponse.redirect(
        new URL(isAuthPage ? "/dashboard" : request.url, request.url),
      );

      const cookies = refreshRes.headers.getSetCookie();

      cookies.forEach((cookie) => {
        response.headers.append("set-cookie", cookie);
      });

      return response;
    }
  }

  if (isDashboard) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/",
    "/login",
    "/register",
    "/dashboard/:path*",
    "/properties/:path*",
  ],
};

const isSafeCallbackUrl = (url: string | null) => {
  return !!url && url.startsWith("/") && !url.startsWith("//");
};
