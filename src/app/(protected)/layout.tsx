import { AuthProvider } from "@/providers/auth-provider";
import { getCurrentUser } from "@/services/auth/auth.server";
import { redirect } from "next/navigation";

const ProtectedLayout = async ({ children }: LayoutProps<"/">) => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return <AuthProvider user={user}>{children}</AuthProvider>;
};

export default ProtectedLayout;
