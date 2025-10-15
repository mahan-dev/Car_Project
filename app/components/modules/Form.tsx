"use client";
import React from "react";
import styles from "@/modules/styles/form/route.module.css";
import {  UseFormSetValue } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { FormValues } from "@/modules/interface/FormValues";
import { authForm } from "@/templates/interface/authForm";

interface FormProps {
  title: string;
  button: string;
  rePassword?: boolean;
  submitHandler: (e: React.FormEvent) => void;
  form: authForm;
  setForm: UseFormSetValue<authForm>
}
const Form = ({
  title,
  button,
  rePassword,
  submitHandler,
  form,
  setForm,
}: FormProps) => {


  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nameType = name as keyof FormValues;

    setForm(nameType, value);
  };

  return (
    <div className={styles.container}>
      <h2>{title}</h2>

      <form className={styles.container__form} onSubmit={submitHandler}>
        <TextField
          type="text"
          name="email"
          onChange={changeHandler}
          value={form.email}
          placeholder="email"
        />
        <TextField
          type="password"
          name="password"
          onChange={changeHandler}
          value={form.password}
          placeholder="password"
        />

        {rePassword && (
          <TextField
            type="password"
            name="rePassword"
            onChange={changeHandler}
            value={form.rePassword}
            placeholder="rePassword"
          />
        )}

        <Button sx={{ width: "100%" }} variant="outlined" type="submit">
          {button}
        </Button>
      </form>
    </div>
  );
};

export default Form;
