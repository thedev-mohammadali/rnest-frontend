import serverClient from "@/lib/api-client/serverClient";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
  _request: NextRequest,
  { params }: { params: Promise<{ rentalAgreementId: string }> },
) => {
  const { rentalAgreementId } = await params;

  const backendRes = await serverClient(
    `/rental-agreements/${rentalAgreementId}/update`,
    {
      method: "PATCH",
      cache: "no-store",
      body: JSON.stringify({
        status: "COMPLETED",
      }),
    },
  );

  const backendData = await backendRes.json();

  return NextResponse.json(backendData, {
    status: backendRes.status,
  });
};
