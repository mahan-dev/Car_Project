"use client";
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Control, Controller } from "react-hook-form";
import { AddForm } from "@/modules/interface/FormValues";

import styles from "@/elements/styles/datePicker/route.module.css";

interface DateProps {
  control: Control<AddForm>;
}

const DatePickerElement = ({ control }: DateProps) => {
  return (
    <div className={styles.container}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name="addDate"
          control={control}
          render={({ field }) => (
            <DatePicker
              label="Pick a date"
              format="YYYY-MM-DD"
              value={field.value}
              onChange={(newValue) => field.onChange(newValue)}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DatePickerElement;
