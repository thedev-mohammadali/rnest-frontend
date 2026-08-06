import { Lock, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  return (
    <form className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>

        <div className="relative">
          <Mail className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />

          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="pl-10"
          />
        </div>
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
          <Lock className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />

          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="pl-10"
          />
        </div>
      </div>

      <Button className="h-11 w-full text-base">Login</Button>

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
