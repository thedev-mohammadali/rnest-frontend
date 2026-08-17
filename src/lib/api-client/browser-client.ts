import { refreshAccessToken } from "@/services/auth/auth.client";

type BrowserClientOptions = RequestInit & {
  skipRefresh?: boolean;
};

export const browserClient = async <T>(
  endpoint: string,
  options?: BrowserClientOptions,
): Promise<T> => {
  const { skipRefresh, ...fetchOptions } = options ?? {};

  const makeRequest = () =>
    fetch(endpoint, {
      ...fetchOptions,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...fetchOptions.headers,
      },
    });

  let response = await makeRequest();

  if (response.status === 401 && !skipRefresh) {
    await refreshAccessToken();

    response = await makeRequest();
  }

  if (!response.ok) {
    let message = "Something went wrong";

    try {
      const errorData = await response.json();

      message = errorData.message ?? message;
    } catch {}

    throw new Error(message);
  }

  return response.json();
};
