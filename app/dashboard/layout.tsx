import React, { PropsWithChildren } from "react";
import DashboardAside from "@/templates/DashboardAside";
import { connectDb } from "@/utils/connectDb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";

const layout = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/signup");

  await connectDb();
  return <DashboardAside>{children}</DashboardAside>;
};

export default layout;
