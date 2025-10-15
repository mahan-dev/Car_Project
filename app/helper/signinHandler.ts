import { signIn } from "next-auth/react";
import { authForm } from "@/templates/interface/authForm";
import toast from "react-hot-toast";

interface SigninProps {
  form: authForm;
}
export const signinHandler = async ({
  form,
}: SigninProps): Promise<boolean> => {
  const { email, password } = form;
  try {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.status === 200) return true;
    else if (res?.error) {
      toast.error(res.error, { duration: 2000 });
      return false;
    }
  } catch (error) {
    console.log("error", error);
    toast.error("error");
    return false;
  }
};
