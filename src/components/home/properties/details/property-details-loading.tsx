import { Skeleton } from "@/components/ui/skeleton";

const PropertyDetailsLoadingSkeleton = () => {
  return (
    <main className="container mx-auto space-y-10 py-10">
      <Skeleton className="h-70 rounded-xl sm:h-87.5 lg:h-105" />

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <div className="space-y-4">
            <Skeleton className="h-10 w-3/4" />

            <Skeleton className="h-5 w-1/3" />
          </div>

          <div className="space-y-3">
            <Skeleton className="h-6 w-40" />

            <Skeleton className="h-20 w-full" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Skeleton className="h-24" />
            <Skeleton className="h-24" />
            <Skeleton className="h-24" />
          </div>
        </div>

        <div>
          <Skeleton className="h-112.5 rounded-xl" />
        </div>
      </div>
    </main>
  );
};

export default PropertyDetailsLoadingSkeleton;
