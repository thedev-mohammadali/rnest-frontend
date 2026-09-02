import { Skeleton } from "@/components/ui/skeleton";

const PaymentSuccessLoading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <Skeleton className="size-16 rounded-full" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <Skeleton className="h-9 w-64" />
          <Skeleton className="h-5 w-80 max-w-full" />
        </div>

        <div className="mt-8 rounded-xl border p-6 text-left shadow-sm">
          <Skeleton className="h-5 w-32" />

          <div className="mt-5 space-y-5">
            <div className="flex items-center justify-between gap-4">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-40" />
            </div>

            <div className="flex items-center justify-between gap-4">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-24" />
            </div>

            <div className="flex items-center justify-between gap-4">
              <Skeleton className="h-4 w-14" />
              <Skeleton className="h-4 w-16" />
            </div>

            <div className="flex items-center justify-between gap-4">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Skeleton className="h-9 w-full sm:w-32" />
          <Skeleton className="h-9 w-full sm:w-48" />
        </div>
      </div>
    </main>
  );
};

export default PaymentSuccessLoading;
