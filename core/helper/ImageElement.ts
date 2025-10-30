import { AddForm } from "@/modules/interface/FormValues";
import { CloudinaryUploadWidgetResults } from "next-cloudinary";
import { SetStateAction } from "react";
import { UseFormSetValue } from "react-hook-form";

interface UrlProps {
  name: string;
  result: CloudinaryUploadWidgetResults;
  widget;
  setImageUrl: React.Dispatch<SetStateAction<string | null>>;
  imageUrl: string | null;
  setValue: UseFormSetValue<AddForm>;
}

interface Cloudinary {
  info: {
    secure_url: string;
  };
}

export const urlHandler = ({
  name,
  result,
  widget,
  imageUrl,
  setImageUrl,
  setValue,
}: UrlProps) => {
  const data = result as Cloudinary;
  const url = data?.info.secure_url;
  if (url) {
    setImageUrl(url);
    setValue(name as keyof AddForm, imageUrl);
    widget.close();
  }
};
