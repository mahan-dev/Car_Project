import React from "react";
import { getServerSession } from "next-auth";
import { connectDb } from "@/utils/connectDb";
import { authOptions } from "@/utils/authOptions";
import { userProfiles } from "@/helper/myProfiles";
import MyProfilesPage from "@/templates/MyProfilesPage";


const page = async () => {
  await connectDb();
  const session = await getServerSession(authOptions);
  const [profiles] = await userProfiles(session);

  const parsedProfiles = JSON.parse(JSON.stringify(profiles));

  return <MyProfilesPage profiles={parsedProfiles}  />;
};

export default page;
