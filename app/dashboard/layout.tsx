import React from "react";
import DashboardAside from "@/templates/DashboardAside";
import { connectDb } from "@/core/utils/connectDb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";

interface layoutProps {
  children: React.ReactNode;
}
const layout = async ({ children }: layoutProps) => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/signup");

  await connectDb();

  return <DashboardAside>{children}</DashboardAside>;
};

export default layout;
