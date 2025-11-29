import React from "react";

import MyProfilesPage from "@/templates/MyProfilesPage";
import { ProfileProps } from "@/core/helper/myProfiles";

interface AdminProps {
  profile: ProfileProps[];
  role: "ADMIN" | "USER";
}
const AdminPage = ({ profile, role }: AdminProps) => {
  const profiles = JSON.parse(JSON.stringify(profile));

  return (
    <div>
      <MyProfilesPage profiles={profiles} role={role} />
    </div>
  );
};

export default AdminPage;
