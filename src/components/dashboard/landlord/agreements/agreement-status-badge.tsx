import { Badge } from "@/components/ui/badge";

const AgreementStatusBadge = ({
  status,
}: {
  status: "ACTIVE" | "EXPIRED" | "PENDING";
}) => {
  const styles = {
    ACTIVE: "bg-green-100 text-green-700",
    EXPIRED: "bg-gray-100 text-gray-700",
    PENDING: "bg-yellow-100 text-yellow-700",
  };

  return <Badge className={styles[status]}>{status}</Badge>;
};

export default AgreementStatusBadge;
