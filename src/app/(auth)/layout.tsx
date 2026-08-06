import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <main className="grid min-h-screen lg:grid-cols-2">{children}</main>;
};

export default AuthLayout;
