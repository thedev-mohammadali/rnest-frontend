import { AuthProvider } from "@/providers/auth-provider";
import QueryProvider from "@/providers/query-provider";
import { getCurrentUser } from "@/services/auth/auth.server";
import { redirect } from "next/navigation";

const ProtectedLayout = async ({ children }: LayoutProps<"/">) => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <AuthProvider user={user}>
      <QueryProvider>{children}</QueryProvider>
    </AuthProvider>
  );
};

export default ProtectedLayout;
