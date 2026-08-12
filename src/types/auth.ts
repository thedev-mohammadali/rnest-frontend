export const Roles = {
  TENANT: "TENANT",
  LANDLORD: "LANDLORD",
  ADMIN: "ADMIN",
} as const;

export type UserRole = keyof typeof Roles;
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: User;
}
