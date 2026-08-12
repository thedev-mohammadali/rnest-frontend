import { browserClient } from "@/lib/api-client/browser-client";
import { LoginFormValues } from "@/schemas/auth.schema";
import { AuthResponse } from "@/types/auth";

export const login = async (payload: LoginFormValues) => {
  const result: AuthResponse = await browserClient("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(payload),
  });

  return result;
};
