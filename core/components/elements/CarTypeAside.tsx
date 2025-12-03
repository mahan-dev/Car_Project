"use client";
import { categoryName } from "@/constants/addCar/addCar";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Link from "next/link";
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
          name="category"
          value={value}
          onChange={onChange}
        >
          {categoryName.map((item) => (
            <MenuItem key={item} value={item} >
              <Link
                href={{
                  pathname: "/marketplace",
                  query: { category: item },
                }}
              >
                {item}
              </Link>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default CarTypeAside;
