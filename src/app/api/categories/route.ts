import serverClient from "@/lib/api-client/serverClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await serverClient("/categories", {
      method: "GET",
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("Get categories BFF error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch categories",
      },
      {
        status: 500,
      },
    );
  }
}
