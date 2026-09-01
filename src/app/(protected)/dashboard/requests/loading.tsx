import { Skeleton } from "@/components/ui/skeleton";

const RequestsLoading = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-9 w-56" />
        <Skeleton className="h-5 w-64" />
      </div>

      <div className="space-y-4">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="rounded-xl border p-6">
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-3">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-40" />
              </div>

              <div className="flex flex-col items-end gap-4">
                <Skeleton className="h-6 w-20 rounded-full" />

                <div className="flex gap-2">
                  <Skeleton className="h-9 w-28" />

                  {index === 0 && <Skeleton className="h-9 w-16" />}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestsLoading;
