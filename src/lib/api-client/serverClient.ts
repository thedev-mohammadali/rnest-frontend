import env from "@/config/env";
import { cookies } from "next/headers";

const serverClient = async (endpoint: string, options?: RequestInit) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const cookieHeader = cookieStore.toString();

  return fetch(`${env.apiUrl}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,

      ...(accessToken && {
        Authorization: `Bearer ${accessToken}`,
      }),

      Cookie: cookieHeader,
    },
    cache: options?.cache,
    next: options?.next,
  });
};

export default serverClient;
