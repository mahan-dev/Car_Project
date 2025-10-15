import React from "react";
import SignupPage from "@/templates/SignupPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return <SignupPage />;
};

export default page;
