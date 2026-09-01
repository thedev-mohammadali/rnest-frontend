import serverClient from "@/lib/api-client/serverClient";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  _request: NextRequest,
  { params }: { params: Promise<{ rentalAgreementId: string }> },
) => {
  const { rentalAgreementId } = await params;

  const backendRes = await serverClient(
    `/payments/rental-agreements/${rentalAgreementId}/checkout`,
    {
      method: "POST",
      cache: "no-store",
    },
  );

  const backendData = await backendRes.json();

  return NextResponse.json(backendData, {
    status: backendRes.status,
  });
};
