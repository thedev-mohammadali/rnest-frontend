"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CategoryForm = () => {
  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>Create Category</CardTitle>
      </CardHeader>

      <CardContent>
        <form className="space-y-5">
          <div>
            <Label>Name</Label>

            <Input placeholder="Apartment" />
          </div>

          <div>
            <Label>Description</Label>

            <Textarea placeholder="Describe category" />
          </div>

          <Button>Create Category</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CategoryForm;
