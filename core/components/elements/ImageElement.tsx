"use client";
import React, { Dispatch, SetStateAction } from "react";
import { UseFormSetValue } from "react-hook-form";

import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

import { AddForm } from "@/modules/interface/FormValues";
import { urlHandler } from "@/helper/ImageElement";
import toast from "react-hot-toast";

import { Button } from "@mui/material";

interface ImageProps {
  name: string;
  imageUrl: string | null;
  setValue: UseFormSetValue<AddForm>;
  setImageUrl: Dispatch<SetStateAction<string | null>>;
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
    toast.success("successfully added");
  };

  const errorHandler = () => {
    toast.error("something went wrong", { duration: 2000 });
  };

  return (
    <>
      <CldUploadWidget
        uploadPreset="unsigned_upload"
        onSuccess={(result: CloudinaryUploadWidgetResults, { widget }) =>
          onSuccess(result, { widget })
        }
        onQueuesEnd={QueuesHandler}
        onError={errorHandler}
      >
        {({ open }) => {
          return (
            !imageUrl && (
              <Button
                sx={{ bgcolor: "black", color: "white" }}
                onClick={() => open()}
                type="button"
              >
                Upload an Image
              </Button>
            )
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default ImageElement;
