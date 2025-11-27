import { AddForm } from "@/modules/interface/FormValues";
import { submitFormHandler } from "@/helper/addCar/submitForm";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { UseFormReset } from "react-hook-form";

interface SubmitHandlerProps {
  profileData: AddForm;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setImageUrl: Dispatch<SetStateAction<string>>;
  imageUrl: string;
  reset: UseFormReset<AddForm>;
}
export const onSubmit = async ({
  profileData,
  imageUrl,
  setLoading,
  setImageUrl,
  reset,
}: SubmitHandlerProps) => {
  const res = await submitFormHandler({
    profileData: {
      ...profileData,
      imageUrl,
    },
    setLoading,
  });

  if (res) {
    toast.success("Done");
    reset();
    setImageUrl("");
  }
};
