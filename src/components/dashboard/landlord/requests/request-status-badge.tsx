import { Badge } from "@/components/ui/badge";
import { RentalRequestStatus } from "@/types/rental-requests";

type Props = {
  status: RentalRequestStatus;
};

const RequestStatusBadge = ({ status }: Props) => {
  const styles = {
    PENDING: "bg-yellow-100 text-yellow-700",

    APPROVED: "bg-green-100 text-green-700",

    REJECTED: "bg-red-100 text-red-700",

    CANCELLED: "bg-red-100 text-red-700",
  };

  return <Badge className={styles[status]}>{status}</Badge>;
};

export default RequestStatusBadge;
