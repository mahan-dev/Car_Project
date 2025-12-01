"use client";

import React, { useState } from "react";
import styles from "@/modules/styles/addCar/route.module.css";
import { alpha, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { AddForm } from "@/modules/interface/FormValues";
import TextInput from "@/modules/TextInput";

import ImageElement from "@/elements/ImageElement";

import DeleteButton from "@/elements/DeleteButton";
import Loader from "@/loader/Loader";
import DatePicker from "@/elements/DatePicker";
import { FetcherResponse } from "@/helper/dataFetcher";
import { defaultHandler } from "@/constants/addCar/addCar";
import { editHandler } from "@/helper/addCar/editHandler";
import { onSubmit } from "@/helper/addCar/submitHandler";

interface AddCarProps {
  title: string;
  profile?: FetcherResponse;
}
const AddCar = ({ title, profile }: AddCarProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(
    profile?.image ?? null
  );
  const [loading, setLoading] = useState<boolean>(false);

  const { watch, setValue, reset, register, control } = useForm<AddForm>({
    defaultValues: defaultHandler(profile),
  });

  const profileData = watch();

  const submitHandler = async () => {
    if (profile) {
      await editHandler(profileData);
    } else {
      await onSubmit({ profileData, imageUrl, setLoading, setImageUrl, reset });
    }
  };

  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        submitHandler();
      }}
      className={styles.container}
    >
      <Typography
        className={styles.container__title}
        sx={{
          fontSize: "1.3rem",
          fontWeight: "600",
        }}
        component={"h2"}
      >
        {title}
      </Typography>

      <TextInput setValue={setValue} register={register} control={control} />

      <ImageElement
        name="imageUrl"
        imageUrl={imageUrl}
        setValue={setValue}
        setImageUrl={setImageUrl}
      />

      <DeleteButton imageUrl={imageUrl} setImageUrl={setImageUrl} />

      <DatePicker control={control} />

      {loading ? (
        <div className={styles.container__loader}>
          <Loader />
        </div>
      ) : (
        <>
          {profile ? (
            <Button
              type="submit"
              sx={{
                width: "100%",
                mt: "2rem",
                bgcolor: "black",
                color: "white",
              }}
            >
              Edit
            </Button>
          ) : (
            <Button
              type="submit"
              sx={{
                width: "100%",
                mt: "2rem",
                bgcolor: "black",
                color: "white",
              }}
            >
              Submit
            </Button>
          )}
        </>
      )}
    </form>
  );
};

export default AddCar;
