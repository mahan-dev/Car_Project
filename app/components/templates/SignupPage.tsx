"use client";
import React, { useEffect } from "react";
import Link from "next/link";

import Form from "@/modules/Form";
import { Typography } from "@mui/material";
import styles from "@/modules/styles/signup/route.module.css";
import { signupHandler } from "@/helper/signupHandler";
import { useForm } from "react-hook-form";
import { authForm } from "@/templates/interface/authForm";
import { useRouter } from "next/navigation";

const SignupPage = () => {
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
    const res = await signupHandler({ form });
    if (res) router.push("/signin");
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div className={styles.container}>
      <Form
        form={form}
        setForm={setValue}
        title="SignUp"
        button="Signup"
        submitHandler={submitHandler}
        rePassword={true}
      />
      <Typography sx={{ mt: "1rem" }} component={"p"}>
        have an account ?<Link href={"/signin"}> Signin</Link>
      </Typography>
    </div>
  );
};

export default SignupPage;
