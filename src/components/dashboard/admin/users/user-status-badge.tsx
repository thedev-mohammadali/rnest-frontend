import { Badge } from "@/components/ui/badge";

type Props = {
  isActive: boolean;
};

const UserStatusBadge = ({ isActive }: Props) => {
  const styles = isActive
    ? "bg-green-100 text-green-700"
    : "bg-red-100 text-red-700";

  return <Badge className={styles}>{isActive ? "Active" : "Banned"}</Badge>;
};

export default UserStatusBadge;
