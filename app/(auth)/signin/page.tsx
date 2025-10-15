import React from "react";
import SigninPage from "@/templates/SigninPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");

  return <SigninPage />;
};

export default page;
