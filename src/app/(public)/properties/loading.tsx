import { Home } from "lucide-react";

const Loading = () => {
  return (
    <div className="bg-muted/30 flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-2xl">
          <Home className="text-primary h-8 w-8 animate-pulse" />
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">RentNest</h1>

          <p className="text-muted-foreground mt-1 text-sm">
            Finding your perfect place...
          </p>
        </div>

        <div className="mt-2 flex gap-1">
          <span className="bg-primary h-2 w-2 animate-bounce rounded-full [animation-delay:-0.3s]" />
          <span className="bg-primary h-2 w-2 animate-bounce rounded-full [animation-delay:-0.15s]" />
          <span className="bg-primary h-2 w-2 animate-bounce rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
