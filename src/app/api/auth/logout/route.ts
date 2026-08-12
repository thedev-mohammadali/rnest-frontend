import env from "@/config/env";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const cookieHeader = request.headers.get("cookie");

  const backendResponse = await fetch(`${env.apiUrl}/auth/logout`, {
    method: "POST",
    headers: {
      Cookie: cookieHeader ?? "",
    },
    cache: "no-store",
  });

  const backendData = await backendResponse.json();

  const response = NextResponse.json(backendData, {
    status: backendResponse.status,
  });

  const cookies = backendResponse.headers.getSetCookie();

  cookies.forEach((cookie) => {
    response.headers.append("set-cookie", cookie);
  });

  return response;
};
