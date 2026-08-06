import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
};

const AuthCard = ({ icon, title, description, children }: Props) => {
  return (
    <Card className="border-border/60 shadow-xl">
      <CardHeader className="space-y-3 text-center">
        <div className="bg-primary/10 mx-auto flex h-12 w-12 items-center justify-center rounded-full">
          {icon}
        </div>

        <CardTitle className="text-3xl font-bold">{title}</CardTitle>

        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default AuthCard;
