import { signIn } from "next-auth/react";
import { authForm } from "@/templates/interface/authForm";
import toast from "react-hot-toast";
import React, { SetStateAction } from "react";

interface SigninProps {
  form: authForm;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
}
export const signinHandler = async ({
  form,
  setLoading,
}: SigninProps): Promise<boolean> => {
  const { email, password } = form;
  try {
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.status === 200) {
      toast.success("LoggedIn");
      return true;
    } else if (res?.error) {
      toast.error(res.error, { duration: 2000 });
      return false;
    }
  } catch (error) {
    console.log("error", error);
    toast.error("error");
    return false;
  } finally {
    setLoading(false);
  }
};
