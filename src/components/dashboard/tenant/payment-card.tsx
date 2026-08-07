import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

const PaymentCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Payment</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-3xl font-bold">৳25,000</p>

        <p className="text-muted-foreground">Due August 10</p>

        <Button className="mt-4">Pay Now</Button>
      </CardContent>
    </Card>
  );
};

export default PaymentCard;
