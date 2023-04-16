import React, { useState } from "react";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import DateInput from "../components/DateInput";
import MyCheckbox from "../components/MyCheckbox";
import RadioButton from "../components/RadioButton";
import MySwitch from "../components/MySwitch";
import { Typography } from "@mui/material";

export default function InputsPage() {
  const [fname, setFname] = useState("");
  const handleFnameChange = (event) => {
    const newValue = event.target.value;
    if (/^[a-zA-Z]*$/.test(newValue)) {
      setFname(newValue);
    }
  };
  return (
    <div>
      <Typography variant="h4" align="center" color="typography.main">
        Inputs
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <TextInput
          label="First Name"
          error={fname.length > 12}
          helperText="First Name Too Long"
          onChange={handleFnameChange}
          value={fname}
        />
        <SelectInput label="Age" />
        <SelectInput label="Age" helperText="Age can't be zero!" />
        <DateInput label="Date of Birth" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: "100px",
            flexWrap: "wrap",
          }}
        >
          <MyCheckbox label="" defaultChecked />
          <MyCheckbox label="" disabled />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: "100px",
            flexWrap: "wrap",
          }}
        >
          <RadioButton type="secondary" label={"Secondary"} />
          <RadioButton label={"Default"} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: "100px",
            flexWrap: "wrap",
          }}
        >
          <MySwitch defaultChecked />
          <MySwitch disabled />
        </div>
      </div>
    </div>
  );
}
