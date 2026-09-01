import { Skeleton } from "@/components/ui/skeleton";

const AgreementsLoading = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-9 w-48" />
        <Skeleton className="h-5 w-64" />
      </div>

      <div className="rounded-xl border p-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-32" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-5 w-20" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-5 w-48" />
          </div>
        </div>

        <Skeleton className="mt-6 h-9 w-32" />
      </div>
    </div>
  );
};

export default AgreementsLoading;
