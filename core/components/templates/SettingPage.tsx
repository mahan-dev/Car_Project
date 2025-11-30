"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";

import axios from "axios";
import { useSession } from "next-auth/react";

const SettingPage = () => {
  const [value, setValue] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const session = useSession();

  useEffect(() => {
    sessionHandler();
  }, [session]);

  const sessionHandler = () => {
    if (session.status === "authenticated") setEmail(session.data.user.email);
  };


  const clickHandler = async () => {
    await axios.post<string>("/api/setting/", {value});
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        Email:
        <p> {email}</p>
      </div>

      <div>
        Password:
        <p> {email}</p>
      </div>

      <TextField
        type="text"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <Button type="submit" variant="outlined" onClick={clickHandler}>
        Submit
      </Button>
    </form>
  );
};

export default SettingPage;
