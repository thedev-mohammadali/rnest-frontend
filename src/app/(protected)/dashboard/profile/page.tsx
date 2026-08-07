import PasswordCard from "@/components/dashboard/tenant/profile/password-card";
import ProfileCard from "@/components/dashboard/tenant/profile/profile-card";

const ProfilePage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>

        <p className="text-muted-foreground">Manage your account information</p>
      </div>

      <ProfileCard />

      <PasswordCard />
    </div>
  );
};

export default ProfilePage;
