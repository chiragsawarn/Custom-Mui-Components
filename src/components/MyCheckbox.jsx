import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function MyCheckbox(props) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked={props.defaultChecked}
            sx={{
              color: "var(--color-secondary)",
              "&.Mui-checked": {
                color: "var(--color-secondary)",
              },
            }}
          />
        }
        sx={{ color: "var(--color-secondary)" }}
        label={props.label || "Label"}
        disabled={props.disabled}
      />
    </FormGroup>
  );
}
