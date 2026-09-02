import serverClient from "@/lib/api-client/serverClient";

export const GET = async (
  _request: Request,
  { params }: { params: Promise<{ sessionId: string }> },
) => {
  const { sessionId } = await params;

  return serverClient(`/payments/verify-session/${sessionId}`, {
    method: "GET",
  });
};
