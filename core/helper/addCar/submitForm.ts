import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { AddForm } from "@/modules/interface/FormValues";

interface SubmitProps {
  profileData: AddForm;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const submitFormHandler = async ({
  profileData,
  setLoading,
}: SubmitProps): Promise<boolean> => {
  const {
    model_name,
    model_make_id,
    year,
    price,
    gearbox,
    engine,
    cylinder,
    description,
    imageUrl,
    category,
  } = profileData;

  const duration = {
    duration: 2000,
  };
  if (
    !model_make_id ||
    !model_name ||
    !year ||
    !price ||
    !gearbox ||
    !engine ||
    !cylinder ||
    !description ||
    !imageUrl ||
    !category
  ) {
    console.log(category);
    toast.error("please fill out fields", duration);
    return;
  }

  if (gearbox !== "Manual" && gearbox !== "Automatic") {
    toast.error("Error  Manual | Automatic");
    return;
  }

  if (isNaN(+year)) {
    toast.error("years should be number");
    return;
  }
  if (isNaN(+price)) {
    toast.error("price should be number");
    return;
  }

  if (isNaN(+engine)) {
    toast.error("engine should be a number");
    return;
  }

  if (isNaN(+cylinder)) {
    toast.error("cylinder should be number");
    return;
  } else if (cylinder.length > 2) {
    toast.error("cylinder shouldn't be more than 2 ");
    return;
  }

  try {
    setLoading(true);
    await axios.post("/api/profile", profileData);

    return true;
  } catch {
    console.log("error");
    return false;
  } finally {
    setLoading(false);
  }
};
