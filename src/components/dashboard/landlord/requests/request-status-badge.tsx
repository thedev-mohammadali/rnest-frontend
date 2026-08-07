import { Badge } from "@/components/ui/badge";

type Props = {
  status: "PENDING" | "APPROVED" | "REJECTED";
};

const RequestStatusBadge = ({ status }: Props) => {
  const styles = {
    PENDING: "bg-yellow-100 text-yellow-700",

    APPROVED: "bg-green-100 text-green-700",

    REJECTED: "bg-red-100 text-red-700",
  };

  return <Badge className={styles[status]}>{status}</Badge>;
};

export default RequestStatusBadge;
