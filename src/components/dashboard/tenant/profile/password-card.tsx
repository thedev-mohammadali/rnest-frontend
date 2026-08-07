import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

const PasswordCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security</CardTitle>
      </CardHeader>

      <CardContent>
        <form className="space-y-5">
          <div>
            <Label>Current Password</Label>

            <Input type="password" />
          </div>

          <div>
            <Label>New Password</Label>

            <Input type="password" />
          </div>

          <div>
            <Label>Confirm Password</Label>

            <Input type="password" />
          </div>

          <Button>Update Password</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PasswordCard;
