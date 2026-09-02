import serverClient from "@/lib/api-client/serverClient";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
  _request: NextRequest,
  { params }: { params: Promise<{ requestId: string }> },
) => {
  const { requestId } = await params;

  const backendRes = await serverClient(
    `/rental-requests/${requestId}/cancel`,
    {
      method: "PATCH",
      cache: "no-store",
    },
  );

  const backendData = await backendRes.json();

  return NextResponse.json(backendData, {
    status: backendRes.status,
  });
};
