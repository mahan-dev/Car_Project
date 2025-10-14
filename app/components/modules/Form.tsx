"use client";
import React, { useEffect } from "react";
import styles from "@/modules/styles/form/route.module.css";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { FormValues } from "@/modules/interface/FormValues";

interface FormProps {
  title: string;
}
const Form = ({ title }: FormProps) => {
  const { handleSubmit, setValue, watch } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formData = watch();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue(name as keyof FormValues, value);
  };

  const submitHandler = () => {};

  return (
    <div className={styles.container}>
      <h2>{title}</h2>

      <form className={styles.container__form} onSubmit={handleSubmit(submitHandler)}>
        <input          
          type="text"
          name="email"
          onChange={changeHandler}
          value={formData.email}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          onChange={changeHandler}
          value={formData.password}
          placeholder="password"
        />
        <Button sx={{ width: "100%" }} variant="outlined" type="submit">
          SiginIn
        </Button>
      </form>
    </div>
  );
};

export default Form;
