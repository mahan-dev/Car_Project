"use client";
import React from "react";
import styles from "@/modules/styles/form/route.module.css";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

interface FormProps {
  title: string;
}
const Form = ({ title }: FormProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const changeHandler = (data: any) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <h2>{title}</h2>

      <div className={styles.container__form}>
        <input
          type="text"
          onChange={handleSubmit(changeHandler)}
          placeholder="email"
        />
        <input
          type="password"
          onChange={handleSubmit(changeHandler)}
          placeholder="password"
        />
      </div>

      <Button sx={{ width: "100%" }} variant="outlined">
        SiginIn
      </Button>
    </div>
  );
};

export default Form;
