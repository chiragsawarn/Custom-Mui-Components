import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormControl } from "@mui/material";

const style = {
  width: "100%",
  "& .MuiOutlinedInput-input": { padding: "10px 14px" },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--color-accent)",
  },
};

export default function DateInput(props) {
  return (
    <FormControl sx={{ p: 1, minWidth: "30%" }}>
      <label id="demo-simple-select-label">{props.label}</label>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker sx={style} label="" />
        </DemoContainer>
      </LocalizationProvider>
    </FormControl>
  );
}
