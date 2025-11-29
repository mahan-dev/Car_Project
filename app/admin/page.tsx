import React from "react";

import { connectDb } from "@/utils/connectDb";

import AdminPage from "@/templates/AdminPage";
import DashboardAside from "@/templates/DashboardAside";
import { getServerSession } from "next-auth";
import { authOptions } from "@/core/utils/authOptions";
import { UserModel } from "@/core/models/user";

const page = async () => {
  await connectDb();
  const session = await getServerSession(authOptions);
  const user = await UserModel.findOne({ email: session.user.email });

  return (
    <DashboardAside isAdmin={user.role}>
      <AdminPage />
    </DashboardAside>
  );
};

export default page;
