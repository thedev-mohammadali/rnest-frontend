"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PropertyForm = () => {
  return (
    <Card className="max-w-3xl">
      <CardHeader>
        <CardTitle>Property Information</CardTitle>
      </CardHeader>

      <CardContent>
        <form className="space-y-6">
          {/* Title */}

          <div className="space-y-2">
            <Label>Property Title</Label>

            <Input placeholder="Modern Apartment" />
          </div>

          {/* Description */}

          <div className="space-y-2">
            <Label>Description</Label>

            <Textarea placeholder="Describe your property..." rows={5} />
          </div>

          {/* Category */}

          <div className="space-y-2">
            <Label>Category</Label>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>

                <SelectItem value="house">House</SelectItem>

                <SelectItem value="villa">Villa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Rent */}

          <div className="space-y-2">
            <Label>Monthly Rent</Label>

            <Input type="number" placeholder="25000" />
          </div>

          {/* Location */}

          <div className="space-y-2">
            <Label>Location</Label>

            <Input placeholder="Dhaka, Bangladesh" />
          </div>

          {/* Images */}

          <div className="space-y-2">
            <Label>Property Images</Label>

            <Input type="file" multiple />
          </div>

          {/* Availability */}

          <div className="flex items-center gap-3">
            <Checkbox id="available" />

            <Label htmlFor="available">Available for rent</Label>
          </div>

          <Button>Create Property</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PropertyForm;
