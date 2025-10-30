import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import React, { SetStateAction, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { AddForm } from "@/modules/interface/FormValues";
import toast from "react-hot-toast";
import { urlHandler } from "@/core/helper/ImageElement";

interface ImageProps {
  name: string;
  imageUrl: string | null;
  setValue: UseFormSetValue<AddForm>;
  setImageUrl: React.Dispatch<SetStateAction<string | null>>;
}
const ImageElement = ({
  name,
  imageUrl,
  setValue,
  setImageUrl,
}: ImageProps) => {
  const onSuccess = (result: CloudinaryUploadWidgetResults, { widget }) => {
    urlHandler({ name, result, widget, setImageUrl, setValue, imageUrl });
  };

  const QueuesHandler = () => {
    console.log("hi");
    toast.success("successfully added");
  };

  const errorHandler = () => {
    toast.error("something went wrong", { duration: 2000 });
  };

  return (
    <section>
      <CldUploadWidget
        uploadPreset="unsigned_upload"
        onSuccess={(result: CloudinaryUploadWidgetResults, { widget }) =>
          onSuccess(result, { widget })
        }
        onQueuesEnd={QueuesHandler}
        onError={errorHandler}
      >
        {({ open }) => {
          return <button onClick={() => open() } type="button">Upload an Image</button>;
        }}
      </CldUploadWidget>
    </section>
  );
};

export default ImageElement;
