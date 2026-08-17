import serverClient from "@/lib/api-client/serverClient";

export const GET = async () => {
  const backendRes = await serverClient("/auth/me", {
    cache: "no-store",
  });

  const backendData = await backendRes.json();

  return Response.json(backendData, {
    status: backendRes.status,
  });
};
