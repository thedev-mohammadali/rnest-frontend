import serverClient from "@/lib/api-client/serverClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await serverClient("/properties", {
      method: "POST",
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("Create property BFF error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create property",
      },
      {
        status: 500,
      },
    );
  }
}
