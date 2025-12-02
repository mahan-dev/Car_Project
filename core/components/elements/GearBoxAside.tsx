"use client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { ChangeEvent } from "react";

interface GearBoxAsideInterface {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const GearBoxAside = ({ value, onChange }: GearBoxAsideInterface) => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="gearBox">GearBox</InputLabel>

        <Select
          labelId="gearBox"
          id="gearBox"
          value={value}
          label="gearBox"
          onChange={onChange}
        >
          <MenuItem value="Automatic">Automatic</MenuItem>
          <MenuItem value="Manual">Manual</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default GearBoxAside;
