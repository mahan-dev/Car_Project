"use client";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Button } from "@mui/material";

import styles from "@/elements/styles/deleteButton/route.module.css";

interface DeleteProps {
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string | null>>;
}

const DeleteButton = ({ imageUrl, setImageUrl }: DeleteProps) => {
  return (
    <>
      {imageUrl && (
        <div className={styles.container}>
          <Image src={imageUrl} alt="uploaded_image" width={200} height={200} />
          <Button
            onClick={() => setImageUrl("")}
            sx={{ bgcolor: "red", color: "white", ml: "2rem" }}
          >
            Delete
          </Button>
        </div>
      )}
    </>
  );
};

export default DeleteButton;
