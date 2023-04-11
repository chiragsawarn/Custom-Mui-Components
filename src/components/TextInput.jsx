import React from "react";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";

export default function TextInput(props) {
  const styles = {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--color-accent)",
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

  return (
    <FormControl sx={{ p: 1, minWidth: "30%" }}>
      <label htmlFor="inputField">{props.label || "Label"}</label>
      <TextField
        {...props}
        id="inputField"
        label=""
        placeholder="Placeholder"
        variant="outlined"
        sx={styles}
        error={props.error}
        helperText={props.error ? props.helperText : ""}
        InputLabelProps={{ shrink: true }}
      />
    </FormControl>
  );
}
