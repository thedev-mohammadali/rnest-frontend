import PropertyDetails from "@/components/home/properties/details/property-details";
import { getPropertyById } from "@/services/property.service";

type Props = {
  params: Promise<{ id: string }>;
};

const PropertyDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const property = await getPropertyById(id);

  return <PropertyDetails property={property} />;
};

export default PropertyDetailsPage;
