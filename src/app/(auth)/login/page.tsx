import AuthCard from "@/components/auth/auth-card";
import AuthImage from "@/components/auth/auth-image";
import LoginForm from "@/components/auth/login-form";

import { Home, LogIn } from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      <AuthImage
        image="/images/auth-login-1.png"
        title={
          <>
            Find a place
            <br />
            you can call home.
          </>
        }
        description={
          <>
            Log in to continue your journey
            <br />
            with RentNest
          </>
        }
      />

      <section className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="mb-8 flex items-center gap-2 text-xl font-bold"
          >
            <Home className="h-6 w-6" />
            RentNest
          </Link>

          <AuthCard
            icon={<LogIn className="text-primary h-6 w-6" />}
            title="Welcome back"
            description="Login to continue managing your RentNest account"
          >
            <LoginForm />
          </AuthCard>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
