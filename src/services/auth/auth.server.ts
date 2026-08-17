import env from "@/config/env";
import serverClient from "@/lib/api-client/serverClient";
import { AuthResponse } from "@/types/auth";

export const getCurrentUser = async () => {
  const res = await serverClient("/auth/me", {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  const result: AuthResponse = await res.json();

  return result.data;
};

export const refreshSession = async (cookieHeader: string) => {
  const response = await fetch(`${env.apiUrl}/auth/refresh-token`, {
    method: "POST",
    headers: {
      Cookie: cookieHeader,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  return response;
};
