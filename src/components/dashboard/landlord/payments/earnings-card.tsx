import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EarningsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Earnings</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-3xl font-bold">৳250,000</p>
      </CardContent>
    </Card>
  );
};

export default EarningsCard;
