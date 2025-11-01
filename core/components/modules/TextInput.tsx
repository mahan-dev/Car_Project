"use client";
import React from "react";
import { categoryName, inputProps } from "@/constants/addCar/addCar";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import styles from "@/modules/styles/textInput/route.module.css";
import {
  Control,
  Controller,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { AddForm } from "@/modules/interface/FormValues";

interface TextProps {
  register: UseFormRegister<AddForm>;
  control: Control<AddForm>;
  setValue: UseFormSetValue<AddForm>;
}
const TextInput = ({ register, control, setValue }: TextProps) => {
  const nameHandler = (name: string): keyof AddForm => {
    return name as keyof AddForm;
  };

  return (
    <div className={styles.container__main}>
      {inputProps.map((item) => (
        <div key={item.title} className={styles.main__content}>
          <span>{item.title}</span>
          {item.name !== "description" ? (
            <TextField
              name={item.name}
              {...register(nameHandler(item.name))}
              variant="outlined"
              placeholder={item.name === "gearbox" ? "Automatic | Manual " : ""}
            />
          ) : (
            <textarea
              className={styles.content__description}
              name="description"
              onChange={(e) => setValue("description", e.target.value)}
            />
          )}
        </div>
      ))}

      <div style={{ marginTop: "3rem" }}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="category_label">Category</InputLabel>

          <Controller
            name="category"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label="category"
                labelId="category"
                onChange={(e) => field.onChange(e.target.value)}
              >
                {categoryName.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
      </div>
    </div>
  );
};

export default TextInput;
