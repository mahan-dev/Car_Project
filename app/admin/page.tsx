import React from "react";
import { UserModel } from "@/models/user";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import AdminPage from "@/templates/AdminPage";
import DashboardAside from "@/templates/DashboardAside";
import { connectDb } from "@/utils/connectDb";

const page = async () => {
  await connectDb();
  const session = await getServerSession(authOptions);

  const user = await UserModel.findOne({ email: session.user.email });

  const isAdmin = user.role === "ADMIN";

  return (
    <DashboardAside isAdmin={isAdmin}>
      <AdminPage />
    </DashboardAside>
  );
};

export default page;
