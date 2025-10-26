import React, { useState } from "react";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CheckBox from "./CheckBox";

const RoomAside = () => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState("");

  const clickHandler = () => {
    setOpen((prev) => !prev);
  };

  type ChangeType = React.ChangeEvent<HTMLInputElement>;
  const changeHandler = (e: ChangeType) => {
    const { name } = e.target;

    setChecked(name);
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
    </List>
  );
};

export default RoomAside;
