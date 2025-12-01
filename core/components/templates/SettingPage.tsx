"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Button, TextField } from "@mui/material";

import styles from "@/templates/styles/settingPage/route.module.css";
import { submitHandler } from "@/core/helper/submitHandler";

const SettingPage = () => {
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const session = useSession();

  useEffect(() => {
    sessionHandler();
  }, [session]);

  const sessionHandler = () => {
    if (session.status === "authenticated") setEmail(session.data.user.email);
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await submitHandler(password, newPassword, {
      setPassword,
      setNewPassword,
    });
    console.log(res);
  };

  type FormElement = FormEvent<HTMLFormElement>;

  return (
    <form
      onSubmit={(e: FormElement) => {
        e.preventDefault();
        onSubmitHandler(e);
      }}
      className={styles.form}
    >
      <div>
        Email:
        <p> {email}</p>
      </div>

      <TextField
        type="text"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        placeholder="Current Password"
      />
      <TextField
        type="text"
        value={newPassword}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewPassword(e.target.value)
        }
        placeholder="New Password"
      />
      <Button type="submit" variant="outlined" sx={{mt:"2rem"}}>
        Change Password
      </Button>
    </form>
  );
};

export default SettingPage;
