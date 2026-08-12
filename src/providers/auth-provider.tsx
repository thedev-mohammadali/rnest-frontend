"use client";

import { User } from "@/types/auth";
import { createContext, ReactNode } from "react";

type AuthContextType = {
  user: User;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

type Props = {
  user: User;
  children: ReactNode;
};

export const AuthProvider = ({ user, children }: Props) => {
  return <AuthContext value={{ user }}>{children}</AuthContext>;
};
