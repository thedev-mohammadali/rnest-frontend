"use client";

import { useForm } from "react-hook-form";

import { Lock, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginFormValues, loginSchema } from "@/schemas/auth.schema";
import { login } from "@/services/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const handleFormSubmit = async (values: LoginFormValues) => {
    clearErrors("root");

    try {
      await login(values);

      toast("Log in successfull", {
        position: "top-right",
        closeButton: true,
      });

      router.replace("/dashboard");
      router.refresh();
    } catch (error) {
      if (error instanceof Error) {
        setError("root", {
          message: error.message,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>

        <div className="relative">
          <Mail
            aria-hidden="true"
            className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
          />

          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="pl-10"
            {...register("email", {
              onChange: () => clearErrors("root"),
            })}
          />
        </div>
        {errors.email && (
          <p className="text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>

          <Link
            href="/forgot-password"
            className="text-muted-foreground hover:text-primary text-sm"
          >
            Forgot password?
          </Link>
        </div>

        <div className="relative">
          <Lock
            aria-hidden="true"
            className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
          />

          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="pl-10"
            {...register("password", {
              onChange: () => clearErrors("root"),
            })}
          />
        </div>
        {errors.password && (
          <p className="text-destructive">{errors.password.message}</p>
        )}
      </div>

      {errors.root && (
        <p className="text-destructive text-center">{errors.root.message}</p>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Spinner data-icon="inline-start" />
            Logging in...
          </>
        ) : (
          "Login"
        )}
      </Button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card text-muted-foreground px-3">Or</span>
        </div>
      </div>

      <p className="text-muted-foreground text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="text-primary font-medium hover:underline"
        >
          Create account
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
