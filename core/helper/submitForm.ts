import { AddForm } from "@/modules/interface/FormValues";
import toast from "react-hot-toast";

interface SubmitProps {
  profileData: AddForm;
}

export const submitFormHandler = async ({ profileData }: SubmitProps) => {
  const { year, gearbox, engine, cylinder, description, imageUrl } =
    profileData;
  console.log(imageUrl);

  const duration = {
    duration: 2000,
  };

  if (!year || !gearbox || !engine || !cylinder || !description || !imageUrl) {
    toast.error("please fill out fields", duration);

    console.log(profileData);
    return;
  }

  if (gearbox !== "Manual" && gearbox !== "Automatic") {
    console.log(gearbox);
    toast("Please enter a valid entity");
    return;
  }

  if (isNaN(+year)) {
    toast.error("years should be number");
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
