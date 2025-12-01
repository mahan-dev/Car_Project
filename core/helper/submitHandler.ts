import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface FailedResponse {
  response: {
    data: {
      error: string;
    };
  };
}

interface SuccessResponse {
  message: string;
}

interface submitHandlerProps {
  setPassword: Dispatch<SetStateAction<string>>;
  setNewPassword: Dispatch<SetStateAction<string>>;
}

export const submitHandler = async (
  password: string,
  newPassword: string,
  { setPassword, setNewPassword }: submitHandlerProps
) => {
  if (!password || !newPassword) {
    toast.error("fields shouldn't be empty", { duration: 2000 });
    return;
  }

  try {
    const res = await axios.post<SuccessResponse>("/api/setting/", {
      password,
      newPassword,
    });

    const status = res.status;
    const message = res.data.message;
    if (status === 200) {
      toast.success(message);
      setPassword("");
      setNewPassword("");
    }
  } catch (error) {
    const errorType = error as FailedResponse;
    const errorMessage = errorType.response?.data?.error;
    const finalMessage = errorMessage || "something went wrong";

    toast.error(finalMessage, { duration: 2000 });
  }
};
