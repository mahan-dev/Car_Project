import React, { SetStateAction, useState } from "react";
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Slider,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CheckBox from "./CheckBox";

interface RoomProps {
  checked: string;
  setChecked: React.Dispatch<SetStateAction<string>>;
}

const RoomAside = ({ checked, setChecked }: RoomProps) => {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState<number[]>([1950, 2025]);

  const clickHandler = () => {
    setOpen((prev) => !prev);
  };

  type ChangeType = React.ChangeEvent<HTMLInputElement>;
  const changeHandler = (e: ChangeType) => {
    const { name } = e.target;

    setChecked(name);
  };

  const rangeHandler = (event: Event, newValue: number[]) => {
    setValue(newValue);
    console.log(event, newValue);
  };

  const checkBox = [
    {
      name: "Automatic",
      label: "Automatic",
      checked,
      onChange: changeHandler,
    },
    {
      name: "Manual",
      label: "Manual",
      checked,
      onChange: changeHandler,
    },
  ];

  return (
    <List sx={{ width: "100%" }}>
      <ListItemButton sx={{ borderRadius: "0.3rem" }} onClick={clickHandler}>
        <ListItemText primary="Gearbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {checkBox.map((item) => (
            <CheckBox
              key={item.name}
              name={item.name}
              label={item.label}
              checked={item.checked}
              onChange={item.onChange}
            />
          ))}
        </List>
      </Collapse>
      <Divider sx={{ my: "0.5rem" }} />
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={rangeHandler}
        min={1950}
        max={2025}
        valueLabelDisplay="auto"
      />
    </List>
  );
};

export default RoomAside;
