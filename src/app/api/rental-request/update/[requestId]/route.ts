import serverClient from "@/lib/api-client/serverClient";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
  request: NextRequest,
  { params }: { params: Promise<{ requestId: string }> },
) => {
  const body = await request.json();

  const { requestId } = await params;

  const backendRes = await serverClient(
    `/rental-requests/${requestId}/update`,

    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(body),
    },
  );

  const backendData = await backendRes.json();

  return NextResponse.json(backendData, {
    status: backendRes.status,
  });
};
