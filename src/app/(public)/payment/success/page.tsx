import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formatter/currency";
import { verifyPaymentSession } from "@/services/payment.server";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

const PaymentSuccessPage = async ({ searchParams }: Props) => {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/dashboard");
  }

  let payment;

  try {
    payment = await verifyPaymentSession(session_id);
  } catch {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="size-9 text-green-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold">Payment Successful!</h1>

        <p className="text-muted-foreground mt-3">
          Your payment has been received successfully.
        </p>
        <div className="bg-card mt-8 rounded-xl border p-6 text-left shadow-sm">
          <h2 className="font-semibold">Payment Details</h2>

          <div className="mt-5 space-y-4 text-sm">
            <div className="flex items-start justify-between gap-4">
              <span className="text-muted-foreground">Property</span>

              <span className="text-right font-medium">
                {payment.propertyTitle}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">Amount</span>

              <span className="font-medium">
                {formatCurrency(payment.amount, "BDT")}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">Status</span>

              <span className="font-medium capitalize">
                {payment.status.toLowerCase()}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">Payment Method</span>

              <span className="font-medium">Stripe</span>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mt-6 text-sm">
          Your rental agreement will be updated shortly. You can view the latest
          status from your rental agreements.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/dashboard/agreements">Back to Rental Agreements</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default PaymentSuccessPage;
