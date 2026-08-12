import serverClient from "@/lib/api-client/serverClient";
import { AuthResponse } from "@/types/auth";

export const getCurrentUser = async () => {
  const res: AuthResponse = await serverClient("/auth/me");

  return res.data;
};
