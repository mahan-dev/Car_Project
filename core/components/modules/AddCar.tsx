"use client";

import React, { FormEvent, useState } from "react";
import styles from "@/modules/styles/addCar/route.module.css";
import { alpha, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { AddForm } from "@/modules/interface/FormValues";
import { submitFormHandler } from "@/helper/submitForm";
import TextInput from "@/modules/TextInput";

import ImageElement from "@/elements/ImageElement";

import DeleteButton from "@/elements/DeleteButton";
import Loader from "@/components/loader/Loader";
import toast from "react-hot-toast";

import dayjs from "dayjs";
import DatePicker from "@/elements/DatePicker";

interface AddCarProps {
  title: string;
}
const AddCar = ({ title }: AddCarProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { watch, setValue, reset, register, control } = useForm<AddForm>({
    defaultValues: {
      model_make_id: "",
      model_name: "",
      year: "",
      cylinder: "",
      gearbox: "",
      engine: "",
      description: "",
      imageUrl: "",
      addDate: dayjs(),
    },
  });

  const profileData = watch();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

  return (
    <form onSubmit={submitHandler} className={styles.container}>
      <Typography
        className={styles.container__title}
        sx={{
          backgroundColor: alpha("#000000", 0.2),
          color: "black",
          fontSize: "1.3rem",
          fontWeight: "600",
          borderRadius: "0.3rem",
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
        <Button
          type="submit"
          sx={{ width: "100%", mt: "2rem", bgcolor: "black", color: "white" }}
        >
          Submit
        </Button>
      )}
    </form>
  );
};

export default AddCar;
