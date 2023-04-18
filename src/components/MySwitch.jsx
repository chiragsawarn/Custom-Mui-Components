import React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

const IOSSwitch = styled((props) => (
  <Switch
    focusVisibleClassName=".Mui-focusVisible"
    disableRipple
    icon={
      <CloseIcon
        style={{
          color: "#000",
          fontSize: "1.25rem",
          padding: "2px",
          backgroundColor: "#FFF",
          borderRadius: "50%",
        }}
      />
    }
    checkedIcon={
      <CheckIcon
        style={{
          color: "var(--success)",
          fontSize: "1.25rem",
          padding: "2px",
          backgroundColor: "#FFF",
          borderRadius: "50%",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "var(--success)",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "var(--success)",
      border: "6px solid #fff",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#C4C4C4" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function MySwitch({ label, disabled, defaultChecked }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <IOSSwitch sx={{ m: 1 }} defaultChecked={defaultChecked || false} />
        }
        label={label || "label"}
        disabled={disabled || false}
      />
    </FormGroup>
  );
}
