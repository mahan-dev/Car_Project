import React from "react";
import { getServerSession } from "next-auth";

import { authOptions } from "@/utils/authOptions";
import DashboardPage from "@/templates/DashboardPage";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/signup");

  return <DashboardPage />;
};

export default Page;
