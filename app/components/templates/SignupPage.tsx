"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { authForm } from "@/templates/interface/authForm";
import Form from "@/modules/Form";
import { signupHandler } from "@/helper/signupHandler";

import { Typography } from "@mui/material";

import styles from "@/modules/styles/signup/route.module.css";
import { useForm } from "react-hook-form";

const SignupPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { watch, setValue } = useForm<authForm>({
    defaultValues: {
      email: "",
      password: "",
      rePassword: "",
    },
  });

  const form = watch();

  const router = useRouter();
  const submitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const res = await signupHandler({ form, setLoading });
    if (res) router.push("/signin");
  };

  return (
    <div className={styles.container}>
      <Form
        form={form}
        setForm={setValue}
        title="SignUp"
        button="Signup"
        submitHandler={submitHandler}
        rePassword={true}
        loading={loading}
        setLoading={setLoading}
      />
      <Typography sx={{ mt: "1rem" }} component={"p"}>
        have an account ?<Link href={"/signin"}> Signin</Link>
      </Typography>
    
    </div>
  );
};

export default SignupPage;
