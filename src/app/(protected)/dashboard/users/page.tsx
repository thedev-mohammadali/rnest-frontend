import { columns } from "@/components/dashboard/admin/users/user-columns";
import { UsersTable } from "@/components/dashboard/admin/users/users-table";
import { users } from "@/lib/mock-users";

const UsersPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Users</h1>

        <p className="text-muted-foreground">Manage platform users</p>
      </div>

      <UsersTable columns={columns} data={users} />
    </div>
  );
};

export default UsersPage;
