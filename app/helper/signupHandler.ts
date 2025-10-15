import axios from "axios";
import { authForm } from "@/templates/interface/authForm";
import toast from "react-hot-toast";

interface SignUp {
  form: authForm;
}
interface SignUpResult {
  status: string;
  message: string;
}

export const signupHandler = async ({ form }: SignUp) => {
  if (!form.email || !form.password || !form.rePassword) {
    toast.error("please fill out fields", { duration: 2000 });
    return;
  }
  if (form.password !== form.rePassword) {
    toast.error("passwords are not match");
    return;
  }

  if (form.password.length <= 4) {
    toast.error("password should be more than 4 character", {
      duration: 2000,
    });
    return;
  }
  try {
    const res = await axios.post<SignUpResult>("/api/signup", form);
    console.log(res);
    if (res.status === 200) {
      toast.success(res.data.message);
      return true;
    }
    return false;
  } catch (error) {
    const errorMessage = error?.response?.data.error;
    toast.error(errorMessage, { duration: 2000 });
    return false;
  }
};
