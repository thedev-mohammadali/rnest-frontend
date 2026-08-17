import serverClient from "@/lib/api-client/serverClient";
import { NextResponse } from "next/server";

export const POST = async () => {
  const backendRes = await serverClient("/auth/refresh-token", {
    method: "POST",
    cache: "no-store",
  });

  const backendData = await backendRes.json();

  const response = NextResponse.json(backendData, {
    status: backendRes.status,
  });

  const cookies = backendRes.headers.getSetCookie();

  cookies.map((cookie) => {
    response.headers.append("set-cookie", cookie);
  });

  return response;
};
