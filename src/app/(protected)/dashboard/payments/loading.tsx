import { Skeleton } from "@/components/ui/skeleton";

const PaymentsLoading = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-9 w-36" />
        <Skeleton className="h-5 w-56" />
      </div>

      <div className="rounded-xl border p-6">
        <Skeleton className="h-5 w-40" />

        <Skeleton className="mt-6 h-9 w-36" />

        <Skeleton className="mt-2 h-4 w-24" />

        <Skeleton className="mt-6 h-9 w-20" />
      </div>

      <div className="rounded-xl border p-6">
        <Skeleton className="h-5 w-36" />

        <div className="mt-6 space-y-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-24" />
              </div>

              <Skeleton className="h-6 w-12 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentsLoading;
