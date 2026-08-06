import AuthCard from "@/components/auth/auth-card";
import AuthImage from "@/components/auth/auth-image";
import RegisterForm from "@/components/auth/register-form";

import { Home, UserPlus } from "lucide-react";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <>
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
            icon={<UserPlus className="text-primary h-6 w-6" />}
            title="Create account"
            description="Register your RentNest account"
          >
            <RegisterForm />
          </AuthCard>
        </div>
      </section>

      <AuthImage
        image="/images/auth-register-1.png"
        title={
          <>
            Create your
            <br />
            new beginning.
          </>
        }
        description={
          <>
            Join RentNest and find
            <br />a place you&apos;ll love.
          </>
        }
      />
    </>
  );
};

export default RegisterPage;
