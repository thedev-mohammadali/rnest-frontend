import { Skeleton } from "@/components/ui/skeleton";

const PropertyListSkeleton = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-xl border">
            <Skeleton className="h-48 w-full rounded-none" />

            <div className="space-y-4 p-5">
              <div className="space-y-2">
                <Skeleton className="h-5 w-3/5" />
                <Skeleton className="h-4 w-2/5" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-3 w-1/4" />
                <Skeleton className="h-6 w-2/5" />
              </div>
            </div>

            <div className="bg-muted/30 flex gap-2 border-t px-5 py-3">
              <Skeleton className="h-9 flex-1" />
              <Skeleton className="h-9 flex-1" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-28" />

        <div className="flex gap-2">
          <Skeleton className="size-9" />
          <Skeleton className="size-9" />
          <Skeleton className="size-9" />
          <Skeleton className="size-9" />
          <Skeleton className="size-9" />
        </div>
      </div>
    </div>
  );
};

export default PropertyListSkeleton;
