import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

const styles = {
  "&.Mui-focused": {
    // borderColor: "var(--color-accent)",
    // background: "coral",
    ".MuiOutlinedInput-notchedOutline": { borderColor: "var(--color-accent)" },
  },
  "& .MuiOutlinedInput-input": {
    padding: "10px 14px",
  },
  "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--error)",
  },
  "& .MuiFormHelperText-root.Mui-error": {
    color: "var(--error)",
    fontSize: "inherit",
    marginLeft: "0",
  },
};
export default function SelectInput(props) {
  const [age, setAge] = useState(0);
  const handleChange = (event) => {
    setAge(parseInt(event.target.value) || 0);
  };
  return (
    <FormControl sx={{ p: 1, minWidth: "30%" }}>
      <label id="demo-simple-select-label">{props.label}</label>
      <Select
        value={age}
        label=""
        sx={styles}
        error={age === 0}
        onChange={handleChange}
        MenuProps={{
          sx: {
            "&.Mui-selected": {
              background: "rgba(10, 133, 255, 0.16)",
            },
            ".MuiMenuItem-root:hover": {
              background: "rgba(10, 133, 255, 0.16)",
            },
          },
        }}
      >
        <MenuItem value={0}>Zero</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <FormHelperText
        sx={{
          marginLeft: 0,
          fontSize: "inherit",
        }}
      >
        {props.helperText}
      </FormHelperText>
    </FormControl>
  );
}
