"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "@/modules/styles/addCar/route.module.css";
import { alpha, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { AddForm } from "@/modules/interface/FormValues";
import { submitFormHandler } from "@/helper/submitForm";
import TextInput from "@/modules/TextInput";

import ImageElement from "@/elements/ImageElement";

import DeleteButton from "@/elements/DeleteButton";

interface AddCarProps {
  title: string;
}
const AddCar = ({ title }: AddCarProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const { watch, setValue } = useForm<AddForm>({
    defaultValues: {
      year: "",
      cylinder: "",
      gearbox: "",
      engine: "",
      description: "",
      imageUrl: "",
      addDate: new Date(),
    },
  });

  const profileData = watch();

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const nameType = name as keyof AddForm;
    setValue(nameType, value);
  };
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitFormHandler({
      profileData: {
        ...profileData,
        imageUrl,
      },
    });
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

      <TextInput changeHandler={changeHandler} />

      <ImageElement
        name="imageUrl"
        imageUrl={imageUrl}
        setValue={setValue}
        setImageUrl={setImageUrl}
      />

      <DeleteButton imageUrl={imageUrl} setImageUrl={setImageUrl} />

      <Button
        type="submit"
        sx={{ width: "100%", mt: "2rem", bgcolor: "black", color: "white" }}
      >
        Submit
      </Button>
    </form>
  );
};

export default AddCar;
