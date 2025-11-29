import React from "react";

import { connectDb } from "@/utils/connectDb";

import AdminPage from "@/templates/AdminPage";
import DashboardAside from "@/templates/DashboardAside";
import { getServerSession } from "next-auth";
import { authOptions } from "@/core/utils/authOptions";
import { UserModel } from "@/core/models/user";
import { redirect } from "next/navigation";
import { Profile } from "@/core/models/profile";

const page = async () => {
  await connectDb();
  const session = await getServerSession(authOptions);
  const user = await UserModel.findOne({ email: session.user.email });

  if (user.role !== "ADMIN") redirect("/signin");

  const profile = await Profile.find({ published: false });

  return (
    <DashboardAside isAdmin={user.role}>
      <AdminPage profile={JSON.parse(JSON.stringify(profile))} role={user.role} />
    </DashboardAside>
  );
};

export default page;
