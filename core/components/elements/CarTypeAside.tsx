"use client"
import { categoryName } from "@/constants/addCar/addCar";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { ChangeEvent } from "react";

interface TypeProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const CarTypeAside = ({ value, onChange }: TypeProps) => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="type">Type</InputLabel>
        <Select
          labelId="type"
          id="type"
          label="type"
          value={value}
          onChange={onChange}
        >
          {categoryName.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default CarTypeAside;
