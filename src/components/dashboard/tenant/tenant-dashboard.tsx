import { formatCurrency } from "@/lib/formatter/currency";
import { getAllPayments } from "@/services/payment.server";
import {
  getLatestPendingPayment,
  getMyRentalAgreements,
  getRecentActiveAgreement,
} from "@/services/rental-agreement.service";
import { getMyRentalRequests } from "@/services/rental-request.service";
import { PaginatedResponse } from "@/types/api";
import { User } from "@/types/auth";
import { RentalRequest } from "@/types/dashboard";
import { RentalAgreement } from "@/types/rental-agreement";
import CurrentRentalCard from "./current-rental-card";
import PaymentCard from "./payment-card";
import QuickActions from "./quick-actions";
import RecentRequests from "./recent-requests";
import TenantStats from "./tenant-stats";

type Props = {
  user: User;
};

const TenantDashboard = async ({ user }: Props) => {
  const requestsResponse: PaginatedResponse<RentalRequest> =
    await getMyRentalRequests();

  const agreementsResponse: PaginatedResponse<RentalAgreement> =
    await getMyRentalAgreements();

  const currentRental = await getRecentActiveAgreement();
  const latestPendingPayment = await getLatestPendingPayment();

  const activeAgreements = agreementsResponse.data?.reduce((prev, curr) => {
    if (curr.status === "ACTIVE") {
      return prev + 1;
    }
    return prev;
  }, 0);

  const { summary } = await getAllPayments();

  const stats = [
    {
      title: "Rental Requests",
      value: requestsResponse.meta.total.toString(),
    },

    {
      title: "Active Agreements",
      value: activeAgreements.toString(),
    },

    {
      title: "Total Payments",
      value: formatCurrency(summary.paid.amount, "BDT"),
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {user.name} </h1>

        <p className="text-muted-foreground">Here is your rental overview</p>
      </div>

      <TenantStats stats={stats} />

      <div className="grid gap-6 lg:grid-cols-2">
        <CurrentRentalCard currentRental={currentRental} />

        <PaymentCard agreement={latestPendingPayment} />
      </div>

      <RecentRequests requests={requestsResponse.data} />

      <QuickActions />
    </div>
  );
};

export default TenantDashboard;
