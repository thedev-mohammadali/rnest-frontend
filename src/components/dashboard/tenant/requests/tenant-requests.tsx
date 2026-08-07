import RentalRequestList from "./rental-request-list";

const TenantRequests = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Rental Requests</h1>

        <p className="text-muted-foreground">
          Track and manage your property requests
        </p>
      </div>

      <RentalRequestList />
    </div>
  );
};

export default TenantRequests;
