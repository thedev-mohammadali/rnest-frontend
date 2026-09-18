"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { useCategories } from "@/hooks/useCategories";
import {
  propertyFormSchema,
  PropertyFormValues,
} from "@/lib/validations/property";
import {
  updateProperty,
  UpdatePropertyPayload,
} from "@/services/property.client";
import { Property } from "@/types/property";

type Props = {
  property: Property;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const EditPropertyModal = ({ property, open, onOpenChange }: Props) => {
  const router = useRouter();

  const { data: categories = [], isLoading: isLoadingCategories } =
    useCategories();

  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<PropertyFormValues>({
    resolver: zodResolver(propertyFormSchema),
  });

  const categoryId = useWatch({
    control,
    name: "categoryId",
  });

  useEffect(() => {
    if (!open) return;

    reset({
      title: property.title,
      description: property.description,
      rent: property.rent,
      location: property.location,
      bedrooms: property.bedrooms ? String(property.bedrooms) : "",
      bathrooms: property.bathrooms ? String(property.bathrooms) : "",
      size: property.size ? String(property.size) : "",
      amenities: property.amenities.join(", "),
      images: property.images.join(", "),
      categoryId: property.category.id,
    });
  }, [open, property, reset]);

  const onSubmit = async (values: PropertyFormValues) => {
    const payload: UpdatePropertyPayload = {
      title: values.title.trim(),
      description: values.description.trim(),
      rent: Number(values.rent),
      location: values.location.trim(),

      bedrooms: values.bedrooms ? Number(values.bedrooms) : undefined,

      bathrooms: values.bathrooms ? Number(values.bathrooms) : undefined,

      size: values.size ? Number(values.size) : undefined,

      amenities: values.amenities
        ? values.amenities
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        : undefined,

      images: values.images
        ? values.images
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        : undefined,

      categoryId: values.categoryId.trim(),
    };

    try {
      await updateProperty(property.id, payload);

      toast.success("Property updated successfully");

      onOpenChange(false);

      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to update property",
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Property</DialogTitle>

          <DialogDescription>
            Update your property information.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Title */}
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor={`title-${property.id}`}>Title</Label>

              <Input id={`title-${property.id}`} {...register("title")} />

              {errors.title && (
                <p className="text-destructive text-sm">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor={`description-${property.id}`}>Description</Label>

              <Textarea
                id={`description-${property.id}`}
                rows={4}
                {...register("description")}
              />

              {errors.description && (
                <p className="text-destructive text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Monthly Rent */}
            <div className="space-y-2">
              <Label htmlFor={`rent-${property.id}`}>Monthly Rent</Label>

              <Input
                id={`rent-${property.id}`}
                type="number"
                min="0"
                step="0.01"
                {...register("rent")}
              />

              {errors.rent && (
                <p className="text-destructive text-sm">
                  {errors.rent.message}
                </p>
              )}
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor={`location-${property.id}`}>Location</Label>

              <Input id={`location-${property.id}`} {...register("location")} />

              {errors.location && (
                <p className="text-destructive text-sm">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Bedrooms */}
            <div className="space-y-2">
              <Label htmlFor={`bedrooms-${property.id}`}>Bedrooms</Label>

              <Input
                id={`bedrooms-${property.id}`}
                type="number"
                min="1"
                {...register("bedrooms")}
              />

              {errors.bedrooms && (
                <p className="text-destructive text-sm">
                  {errors.bedrooms.message}
                </p>
              )}
            </div>

            {/* Bathrooms */}
            <div className="space-y-2">
              <Label htmlFor={`bathrooms-${property.id}`}>Bathrooms</Label>

              <Input
                id={`bathrooms-${property.id}`}
                type="number"
                min="1"
                {...register("bathrooms")}
              />

              {errors.bathrooms && (
                <p className="text-destructive text-sm">
                  {errors.bathrooms.message}
                </p>
              )}
            </div>

            {/* Size */}
            <div className="space-y-2">
              <Label htmlFor={`size-${property.id}`}>Size</Label>

              <Input
                id={`size-${property.id}`}
                type="number"
                min="0"
                step="0.01"
                {...register("size")}
              />

              {errors.size && (
                <p className="text-destructive text-sm">
                  {errors.size.message}
                </p>
              )}
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label>Category</Label>

              <Select
                value={categoryId}
                onValueChange={(value) => {
                  setValue("categoryId", value, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
                disabled={isLoadingCategories}
              >
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={
                      isLoadingCategories
                        ? "Loading categories..."
                        : "Select a category"
                    }
                  />
                </SelectTrigger>

                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {errors.categoryId && (
                <p className="text-destructive text-sm">
                  {errors.categoryId.message}
                </p>
              )}
            </div>

            {/* Amenities */}
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor={`amenities-${property.id}`}>Amenities</Label>

              <Input
                id={`amenities-${property.id}`}
                placeholder="WiFi, Parking, Balcony"
                {...register("amenities")}
              />
            </div>

            {/* Images */}
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor={`images-${property.id}`}>Images</Label>

              <Textarea
                id={`images-${property.id}`}
                rows={3}
                placeholder="https://..."
                {...register("images")}
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              disabled={isSubmitting}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="animate-spin" />}
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPropertyModal;
