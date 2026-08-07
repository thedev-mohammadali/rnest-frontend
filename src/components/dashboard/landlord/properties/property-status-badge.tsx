import { Badge } from "@/components/ui/badge";

type Props = {
  status: "AVAILABLE" | "RENTED";
};

const PropertyStatusBadge = ({ status }: Props) => {
  const styles = {
    AVAILABLE: "bg-green-100 text-green-700",

    RENTED: "bg-blue-100 text-blue-700",
  };

  return <Badge className={styles[status]}>{status}</Badge>;
};

export default PropertyStatusBadge;
