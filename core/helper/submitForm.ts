import { AddForm } from "@/modules/interface/FormValues";
import axios from "axios";
import toast from "react-hot-toast";

interface SubmitProps {
  profileData: AddForm;
  formData: FormData;
  image: null | File;
}

export const submitFormHandler = async ({
  profileData,
  formData,
  image,
}: SubmitProps) => {
  const { year, gearbox, engine, cylinder, description } = profileData;

  const formDataImage = new FormData();
  formData.append("file", image);

  const res = await axios.post("/api/add", formDataImage);
  console.log(res);

  const duration = {
    duration: 2000,
  };
  if (!year || !gearbox || !engine || !cylinder || !description) {
    console.log(profileData);
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
