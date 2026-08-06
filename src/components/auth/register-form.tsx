import { Lock, Mail, User } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RegisterForm = () => {
  return (
    <form className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">Full name</Label>

        <div className="relative">
          <User className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />

          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>

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
        <Label htmlFor="password">Password</Label>

        <div className="relative">
          <Lock className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />

          <Input
            id="password"
            type="password"
            placeholder="Create a strong password"
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Account type</Label>

        <Select defaultValue="TENANT">
          <SelectTrigger>
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="TENANT">Tenant</SelectItem>

            <SelectItem value="LANDLORD">Landlord</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="h-11 w-full text-base">Create account</Button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card text-muted-foreground px-3">Or</span>
        </div>
      </div>

      <p className="text-muted-foreground text-center text-sm">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-primary font-medium hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
