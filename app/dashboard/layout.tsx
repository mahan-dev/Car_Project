import React, { PropsWithChildren } from "react";
import DashboardAside from "@/templates/DashboardAside";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";
import { UserModel } from "@/models/user";
import { connectDb } from "@/utils/connectDb";

const layout = async ({ children }: PropsWithChildren) => {
  await connectDb();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signup");
  const user = await UserModel.findOne({ email: session.user.email });

  return <DashboardAside isAdmin={user.role}>{children}</DashboardAside>;
};

export default layout;
