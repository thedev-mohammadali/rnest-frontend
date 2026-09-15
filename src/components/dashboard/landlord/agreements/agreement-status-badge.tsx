import { Badge } from "@/components/ui/badge";
import { RentalAgreementStatus } from "@/types/rental-agreement";

type Props = {
  status: RentalAgreementStatus;
};

const statusConfig: Record<
  RentalAgreementStatus,
  { label: string; className: string }
> = {
  ACTIVE: {
    label: "Active",
    className: "bg-green-100 text-green-700",
  },
  PENDING_PAYMENT: {
    label: "Pending Payment",
    className: "bg-yellow-100 text-yellow-700",
  },
  COMPLETED: {
    label: "Completed",
    className: "bg-gray-100 text-gray-700",
  },
  TERMINATED: {
    label: "Terminated",
    className: "bg-red-100 text-red-700",
  },
  CANCELLED: {
    label: "Cancelled",
    className: "bg-red-100 text-red-700",
  },
};

const AgreementStatusBadge = ({ status }: Props) => {
  const { label, className } = statusConfig[status];

  return <Badge className={className}>{label}</Badge>;
};

export default AgreementStatusBadge;
