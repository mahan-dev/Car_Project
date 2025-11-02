import React from "react";
import { getServerSession } from "next-auth";
import { connectDb } from "@/utils/connectDb";
import { authOptions } from "@/utils/authOptions";
import { userProfiles } from "@/core/helper/myProfiles";
import MyProfilesPage from "@/core/components/templates/MyProfilesPage";

const page = async () => {
  await connectDb();
  const session = await getServerSession(authOptions);
  const [profiles] = await userProfiles(session);

  return <MyProfilesPage data={JSON.parse(JSON.stringify(profiles))} />;
};

export default page;
