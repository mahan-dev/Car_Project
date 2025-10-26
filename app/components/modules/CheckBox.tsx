import { Checkbox, FormControlLabel, ListItemButton } from "@mui/material";
import React, { ChangeEvent } from "react";

interface CheckBox {
  name: string;
  label: string;
  checked: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const CheckBox = ({ name, label, checked, onChange }) => {
  return (
    <ListItemButton sx={{ pl: 2, borderRadius: "0.3rem" }}>
      <FormControlLabel
        name={name}
        label={label}
        control={<Checkbox checked={checked === label} onChange={onChange} />}
      />
    </ListItemButton>
  );
};

export default CheckBox;
