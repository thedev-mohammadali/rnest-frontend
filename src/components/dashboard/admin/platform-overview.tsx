import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PlatformOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Overview</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="bg-muted flex h-52 items-center justify-center rounded-lg">
          Chart Placeholder
        </div>
      </CardContent>
    </Card>
  );
};

export default PlatformOverview;
