import { Skeleton } from "@/components/ui/skeleton";

const ProfileLoading = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-9 w-40" />
        <Skeleton className="h-5 w-64" />
      </div>

      <div className="rounded-xl border p-6">
        <Skeleton className="h-5 w-40" />

        <div className="mt-6 space-y-5">
          <div className="space-y-2">
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-10 w-full" />
          </div>

          <Skeleton className="h-9 w-28" />
        </div>
      </div>

      <div className="rounded-xl border p-6">
        <Skeleton className="h-5 w-24" />

        <div className="mt-6 space-y-5">
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>

          <Skeleton className="h-9 w-32" />
        </div>
      </div>
    </div>
  );
};

export default ProfileLoading;
