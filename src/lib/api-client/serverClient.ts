import env from "@/config/env";
import { cookies } from "next/headers";

const serverClient = async <T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> => {
  const cookieStore = await cookies();

  const cookieHeader = cookieStore.toString();

  const response = await fetch(`${env.apiUrl}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
      Cookie: cookieHeader,
    },
    cache: options?.cache,
    next: options?.next,
  });

  return response.json();
};

export default serverClient;
