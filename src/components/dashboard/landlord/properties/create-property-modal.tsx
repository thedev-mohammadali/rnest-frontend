"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
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

import {
  createProperty,
  CreatePropertyPayload,
} from "@/services/property.client";

import { useCategories } from "@/hooks/useCategories";
import {
  propertyFormSchema,
  PropertyFormValues,
} from "@/lib/validations/property";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const defaultValues: PropertyFormValues = {
  title: "",
  description: "",
  rent: "",
  location: "",
  bedrooms: "",
  bathrooms: "",
  size: "",
  amenities: "",
  images: "",
  categoryId: "",
};

const CreatePropertyModal = ({ open, onOpenChange }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<PropertyFormValues>({
    resolver: zodResolver(propertyFormSchema),
    defaultValues,
  });

  const router = useRouter();

  const {
    data: categories = [],
    isLoading: isLoadingCategories,
    isError: isCategoriesError,
  } = useCategories();

  useEffect(() => {
    if (isCategoriesError) {
      toast.error("Failed to load categories");
    }
  }, [isCategoriesError]);

  const onSubmit = async (values: PropertyFormValues) => {
    const payload: CreatePropertyPayload = {
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
      await createProperty(payload);

      toast.success("Property created successfully");

      reset(defaultValues);
      onOpenChange(false);

      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to create property",
      );
    }
  };

  const handleOpenChange = (value: boolean) => {
    if (!value && !isSubmitting) {
      reset(defaultValues);
    }

    onOpenChange(value);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create Property</DialogTitle>
          <DialogDescription>
            Add a new rental property to your listings.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Title */}
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="property-title">Title</Label>

              <Input
                id="property-title"
                placeholder="Modern Apartment"
                {...register("title")}
              />

              {errors.title && (
                <p className="text-destructive text-sm">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="property-description">Description</Label>

              <Textarea
                id="property-description"
                rows={4}
                placeholder="Describe your property..."
                {...register("description")}
              />

              {errors.description && (
                <p className="text-destructive text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Rent */}
            <div className="space-y-2">
              <Label htmlFor="property-rent">Monthly Rent</Label>

              <Input
                id="property-rent"
                type="number"
                min="0"
                step="0.01"
                placeholder="25000"
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
              <Label htmlFor="property-location">Location</Label>

              <Input
                id="property-location"
                placeholder="Dhaka, Bangladesh"
                {...register("location")}
              />

              {errors.location && (
                <p className="text-destructive text-sm">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Bedrooms */}
            <div className="space-y-2">
              <Label htmlFor="property-bedrooms">Bedrooms</Label>

              <Input
                id="property-bedrooms"
                type="number"
                min="1"
                placeholder="3"
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
              <Label htmlFor="property-bathrooms">Bathrooms</Label>

              <Input
                id="property-bathrooms"
                type="number"
                min="1"
                placeholder="2"
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
              <Label htmlFor="property-size">Size</Label>

              <Input
                id="property-size"
                type="number"
                min="0"
                step="0.01"
                placeholder="1200"
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
                onValueChange={(value) => {
                  setValue("categoryId", value, {
                    shouldValidate: true,
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
              <Label htmlFor="property-amenities">Amenities</Label>

              <Input
                id="property-amenities"
                placeholder="WiFi, Parking, Balcony"
                {...register("amenities")}
              />

              <p className="text-muted-foreground text-xs">
                Separate amenities with commas.
              </p>
            </div>

            {/* Images */}
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="property-images">Images</Label>

              <Textarea
                id="property-images"
                rows={3}
                placeholder="https://example.com/image-1.jpg, https://example.com/image-2.jpg"
                {...register("images")}
              />

              <p className="text-muted-foreground text-xs">
                Add image URLs separated by commas.
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              disabled={isSubmitting}
              onClick={() => handleOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="animate-spin" />}
              Create Property
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePropertyModal;
