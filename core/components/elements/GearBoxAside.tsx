"use client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

interface GearBoxAsideInterface {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const GearBoxAside = ({ value, onChange }: GearBoxAsideInterface) => {


  console.log(value)
  const router = useRouter()
  const selectHandler = (gearBox: string) => {
    router.push(`/marketplace?gearBox=${gearBox}`)
  }
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="gearBox">GearBox</InputLabel>

        <Select
          labelId="gearBox"
          id="gearBox"
          value={value}
          label="gearBox"
          name="gearBox"
          onChange={onChange}
        >
          <MenuItem value="Automatic" id="Automatic" onClick={() => selectHandler("Automatic")}>
          Automatic
          </MenuItem>
          <MenuItem value="Manual" onClick={() => selectHandler("Manual")}>
            Manual
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default GearBoxAside;
