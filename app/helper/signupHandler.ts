import axios from "axios";
import { authForm } from "@/templates/interface/authForm";
import toast from "react-hot-toast";

interface SignUp {
  form: authForm;
}

export const signupHandler = async ({ form }: SignUp) => {
  try {
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
    const res = await axios.post("/api/signup", form);
    console.log("🎉 ~ signupHandler.ts:26 -> res: ", res);
  } catch (error) {
    console.log(error);
  }
};
