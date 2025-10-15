"use client";
import React, { FormEvent } from "react";
import styles from "@/modules/styles/signin/route.module.css";
import Form from "@/modules/Form";
import Link from "next/link";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { authForm } from "@/templates/interface/authForm";
import { signinHandler } from "@/helper/signinHandler";
import { useRouter } from "next/navigation";

const SigninPage = () => {
  const { watch, setValue } = useForm<authForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const form = watch();

  const router = useRouter();
  const submitHandler = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const res = await signinHandler({ form });
    if (res) router.push("/dashboard");
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
