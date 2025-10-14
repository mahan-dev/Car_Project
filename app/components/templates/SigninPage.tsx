"use client";
import React from "react";
import styles from "@/modules/styles/signin/route.module.css";
import Form from "@/modules/Form";
import Link from "next/link";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { authForm } from "@/templates/interface/authForm";

const SigninPage = () => {
  const { watch, setValue } = useForm<authForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const form = watch();

  const submitHandler = async (): Promise<void> => {
    console.log("signin");
  };
  return (
    <div className={styles.container}>
      <Form
        title="Signin"
        button={"Signin"}
        form={form}
        setForm={setValue}
        submitHandler={submitHandler}
      />
      <Typography sx={{ mt: "1rem" }} component={"p"}>
        {"don't have an account ?"}
        <Link href={"/signup"}> Signup</Link>
      </Typography>
    </div>
  );
};

export default SigninPage;
