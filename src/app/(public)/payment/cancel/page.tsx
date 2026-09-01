import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

const PaymentCancelPage = async ({ searchParams }: Props) => {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
            <CircleX className="h-9 w-9 text-yellow-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold">Payment Cancelled</h1>

        <p className="text-muted-foreground mt-3">
          Your payment was cancelled and no payment was completed. You can
          return to your rental agreements and try again whenever you&apos;re
          ready.
        </p>

        <Button asChild className="mt-8">
          <Link href="/dashboard/agreements">Back to Rental Agreements</Link>
        </Button>
      </div>
    </main>
  );
};

export default PaymentCancelPage;
