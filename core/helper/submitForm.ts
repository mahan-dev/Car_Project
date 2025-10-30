import { AddForm } from "@/modules/interface/FormValues";

import { UseFormSetValue } from "react-hook-form";
import toast from "react-hot-toast";

interface SubmitProps {
  profileData: AddForm;
  formData: FormData;
  image: string | null;
  setValue: UseFormSetValue<AddForm>;
}

export const submitFormHandler = async ({
  profileData,
  image,
}: SubmitProps) => {
  const { year, gearbox, engine, cylinder, description } = profileData;

  const duration = {
    duration: 2000,
  };

  if (!year || !gearbox || !engine || !cylinder || !description || !image) {

    toast.error("please fill out fields", duration);
    return;
  }
  if (isNaN(+cylinder)) {
    toast.error("cylinder should be number");
    return;
  } else if (cylinder.length > 2) {
    toast.error("cylinder shouldn't be more than 2 ");
    return;
  }
};
