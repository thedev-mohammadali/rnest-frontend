import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

const ProfileCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>

      <CardContent>
        <form className="space-y-5">
          <div>
            <Label>Name</Label>

            <Input defaultValue="Mohammad Ali" />
          </div>

          <div>
            <Label>Email</Label>

            <Input defaultValue="ali@example.com" />
          </div>

          <Button>Save Changes</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
