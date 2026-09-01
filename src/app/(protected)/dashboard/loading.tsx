import { Skeleton } from "@/components/ui/skeleton";

const DashboardLoading = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-9 w-72" />
        <Skeleton className="h-5 w-52" />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="rounded-xl border p-6">
            <Skeleton className="mb-4 h-4 w-32" />
            <Skeleton className="h-8 w-16" />
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border p-6">
          <Skeleton className="mb-6 h-5 w-32" />

          <div className="space-y-3">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-32" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-5 w-20" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-5 w-20" />
            </div>
          </div>

          <Skeleton className="mt-6 h-9 w-32" />
        </div>

        <div className="rounded-xl border p-6">
          <Skeleton className="mb-6 h-5 w-36" />

          <Skeleton className="h-9 w-36" />
          <Skeleton className="mt-2 h-4 w-24" />

          <Skeleton className="mt-6 h-9 w-20" />
        </div>
      </div>

      <div className="rounded-xl border p-6">
        <Skeleton className="mb-6 h-5 w-32" />

        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center justify-between">
              <Skeleton className="h-4 w-56" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <Skeleton className="h-9 w-32" />
        <Skeleton className="h-9 w-28" />
        <Skeleton className="h-9 w-32" />
      </div>
    </div>
  );
};

export default DashboardLoading;
