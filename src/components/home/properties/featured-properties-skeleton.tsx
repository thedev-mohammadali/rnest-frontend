import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const FeaturedPropertiesSkeleton = () => {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="overflow-hidden">
          <Skeleton className="h-60 w-full" />

          <CardHeader>
            <Skeleton className="h-6 w-3/4" />
          </CardHeader>

          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-1/2" />

            <div className="flex gap-4">
              <Skeleton className="h-4 w-16" />

              <Skeleton className="h-4 w-16" />

              <Skeleton className="h-4 w-20" />
            </div>
          </CardContent>

          <CardFooter className="flex items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-20" />
            </div>

            <Skeleton className="h-10 w-28" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default FeaturedPropertiesSkeleton;
