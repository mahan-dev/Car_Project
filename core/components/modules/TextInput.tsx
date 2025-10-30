import React from "react";
import { inputProps } from "@/constants/addCar/addCar";
import { TextField } from "@mui/material";
import styles from "@/modules/styles/addCar/route.module.css";

interface TextProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const TextInput = ({ changeHandler }: TextProps) => {
  return (
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
  );
};

export default TextInput;
