import env from "@/config/env";
import { NextResponse, type NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const backendRes = await fetch(`${env.apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const backendData = await backendRes.json();

  const response = NextResponse.json(backendData, {
    status: backendRes.status,
  });

  const cookies = backendRes.headers.getSetCookie();

  cookies.forEach((cookie) => {
    response.headers.append("set-cookie", cookie);
  });

  return response;
};
