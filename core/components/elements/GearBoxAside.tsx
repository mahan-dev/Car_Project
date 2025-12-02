"use client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Link from "next/link";
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
          <MenuItem value="Automatic">
            <Link
              href={{
                pathname: "/marketplace",
                query: { gearBox: "Automatic" },
              }}
            >
              Automatic
            </Link>
          </MenuItem>
          <MenuItem value="Manual">
            <Link
              href={{
                pathname: "/marketplace",
                query: { gearBox: "Manual" },
              }}
            >
              Manual
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default GearBoxAside;
