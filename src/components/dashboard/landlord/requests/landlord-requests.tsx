import RequestList from "@/components/dashboard/landlord/requests/request-list";

const LandlordRequests = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Rental Requests</h1>

        <p className="text-muted-foreground">
          Review and manage tenant requests
        </p>
      </div>

      <RequestList />
    </div>
  );
};

export default LandlordRequests;
