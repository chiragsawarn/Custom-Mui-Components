import React from "react";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

export default function RadioButton({ type, label }) {
  const textColor =
    type === "secondary"
      ? "var(--color-secondary)"
      : "var(--typography-medium-emphasis)";
  return (
    <div>
      <FormControl sx={{ p: 1, minWidth: "30%" }}>
        <FormControlLabel
          value={label}
          sx={{ color: textColor }}
          control={
            <Radio
              sx={{
                color:
                  type === "secondary"
                    ? "var(--color-secondary)"
                    : "var(--typography-medium-emphasis)",

                "&.Mui-checked": {
                  color:
                    type === "secondary"
                      ? "var(--color-secondary)"
                      : "var(--typography-medium-emphasis)",
                },
              }}
            />
          }
          label={label}
        />
      </FormControl>
    </div>
  );
}
