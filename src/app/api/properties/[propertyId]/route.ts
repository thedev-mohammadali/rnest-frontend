import serverClient from "@/lib/api-client/serverClient";
import { NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{
    propertyId: string;
  }>;
};

export async function PATCH(request: Request, { params }: RouteContext) {
  try {
    const { propertyId } = await params;

    const body = await request.json();

    const response = await serverClient(`/properties/${propertyId}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("Update property BFF error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update property",
      },
      {
        status: 500,
      },
    );
  }
}
