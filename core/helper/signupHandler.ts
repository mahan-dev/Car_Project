import axios from "axios";
import toast from "react-hot-toast";
import { SignUp, SignUpResult } from "@/helper/interface/signup/interface";
import { emailRegex } from "@/constants/signup-helper/regex";

export const signupHandler = async ({ form, setLoading }: SignUp) => {
  const { email, password, rePassword } = form;
  if (!email || !password || !rePassword) {
    toast.error("please fill out fields", { duration: 2000 });
    return;
  }

  const isEmail = emailRegex.test(email);

  if (!isEmail) {
    toast.error("Please enter a valid email", { duration: 2000 });
    return;
  }

  if (password !== rePassword) {
    toast.error("passwords are not match");
    return;
  }

  if (password.length <= 4) {
    toast.error("password should be more than 4 character", {
      duration: 2000,
    });
    return;
  }
  try {
    setLoading(true);
    const res = await axios.post<SignUpResult>("/api/signup", form);
    if (res.status === 200) {
      toast.success(res.data.message);
      return true;
    }
    return false;
  } catch (error) {
    const errorMessage = error?.response?.data.error;
    toast.error(errorMessage, { duration: 2000 });
    return false;
  } finally {
    setLoading(false);
  }
};
