import { authForm } from "@/templates/interface/authForm";
import { SetStateAction } from "react";

interface SignUp {
  form: authForm;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
}
interface SignUpResult {
  status: string;
  message: string;
}
export type { SignUp, SignUpResult };
