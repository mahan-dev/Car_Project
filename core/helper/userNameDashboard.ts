"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export const sessionUser = async () => {
  const {
    user: { email },
  } = await getServerSession(authOptions);
  const [userName] = email?.split("@");
  return userName;
};
