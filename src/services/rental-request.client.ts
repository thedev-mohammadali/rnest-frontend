import { browserClient } from "@/lib/api-client/browser-client";

export const cancelRequest = async (requestId: string) => {
  await browserClient(`/api/rental-request/cancel/${requestId}`, {
    method: "PATCH",
    cache: "no-store",
  });
};

export const updateRequest = async (
  requestId: string,
  status: "APPROVED" | "REJECTED",
) => {
  await browserClient(`/api/rental-request/update/${requestId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({
      status,
    }),
  });
};
