"use client";

import React, { FormEvent, useState } from "react";
import styles from "@/modules/styles/addCar/route.module.css";
import { alpha, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { AddForm } from "@/modules/interface/FormValues";
import { submitFormHandler } from "@/helper/submitForm";
import TextInput from "@/modules/TextInput";

import ImageElement from "../elements/ImageElement";
import Image from "next/image";

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

  const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const nameType = name as keyof AddForm;
    setValue(nameType, value);
  };
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitFormHandler({
      profileData,
      formData: null,
      image: imageUrl,
      setValue,
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

    {
      imageUrl && (
        <Image src={imageUrl} alt="uploaded_image" width={200} height={200} />
      )
    }

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddCar;
