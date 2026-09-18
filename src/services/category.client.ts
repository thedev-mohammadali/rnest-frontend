import { browserClient } from "@/lib/api-client/browser-client";

export type Category = {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

type CategoriesResponse = {
  success: boolean;
  message: string;
  data: Category[];
};

export const getCategories = async (): Promise<Category[]> => {
  const response = await browserClient<CategoriesResponse>("/api/categories", {
    method: "GET",
    cache: "no-store",
  });

  return response.data;
};
