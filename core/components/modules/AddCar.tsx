"use client";
import React, { useEffect } from "react";
import styles from "@/modules/styles/addCar/route.module.css";
import { alpha, Button, TextField, Typography } from "@mui/material";
import { inputProps } from "@/constants/addCar/addCar";
import { useForm } from "react-hook-form";
import { AddForm } from "@/modules/interface/FormValues";

interface AddCarProps {
  title: string;
}
const AddCar = ({ title }: AddCarProps) => {
  const { watch, setValue } = useForm<AddForm>({
    defaultValues: {
      year: "",
      cylinder: 0,
      gearbox: "",
      engine: "",
      description: "",
      addDate: new Date(),
    },
  });

  const profileData = watch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    const nameType = name as keyof AddForm;

    setValue(nameType, value);
  };



  return (
    <form className={styles.container}>
      <Typography
        className={styles.container__title}
        sx={{
          backgroundColor: alpha("#000000", 0.2),
          color: "black",
          fontSize: "1.3rem",
          fontWeight: "600",
          borderRadius: "0.3rem",
        }}
        component={"h2"}
      >
        {title}
      </Typography>
      <div className={styles.container__main}>
        {inputProps.map((item) => (
          <div key={item.title} className={styles.main__content}>
            <span>{item.title}</span>
            <TextField
              name={item.name}
              variant="outlined"
              onChange={changeHandler}
            />
          </div>
        ))}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddCar;
