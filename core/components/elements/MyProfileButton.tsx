"use client";

import { Button } from "@mui/material";
import axios from "axios";

import { useRouter } from "next/navigation";

import React from "react";
import { FaEdit } from "react-icons/fa";

interface ButtonProps {
  role: "ADMIN" | "USER";
  data: string;
}
const MyProfileButton = ({ role, data }: ButtonProps) => {
  const router = useRouter();

  const editHandler = (id: string) => {
    router.push(`/dashboard/my-profiles/${id}`);
  };

  const deleteHandler = async (id: string) => {
    const { status } = await axios.delete<string>(`/api/admin/remove/${id}`);
    if (status === 200) router.refresh();
  };

  const publishHandler = async (id: string) => {
    await axios.get(`/api/admin/${id}`);
  };

  return (
    <>
      {role === "USER" && (
        <Button
          sx={{ minWidth: "auto", width: "50px", padding: "0.2rem" }}
          variant="outlined"
          onClick={() => editHandler(data)}
        >
          <FaEdit />
        </Button>
      )}

      {role === "ADMIN" && (
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
        >
          <Button variant="outlined" onClick={() => deleteHandler(data)}>
            Delete
          </Button>
          <Button variant="outlined" onClick={() => publishHandler(data)}>
            Publish
          </Button>
        </div>
      )}
    </>
  );
};

export default MyProfileButton;
