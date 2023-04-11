import React from "react";
import ButtonsPage from "./pages/ButtonsPage";
import InputsPage from "./pages/InputsPage";
import UtilitiesPage from "./pages/UtilitiesPage";
import { lightTheme, darkTheme } from "./Theme";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { FormControlLabel, Paper, Switch } from "@mui/material";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <Paper>
          <FormControlLabel
            control={
              <Switch
                checked={dark}
                onChange={() => setDark((dark) => !dark)}
              />
            }
            label="Dark Mode"
            labelPlacement="start"
          />

          <UtilitiesPage />
          <ButtonsPage />
          <InputsPage />
        </Paper>
      </ThemeProvider>
    </div>
  );
}
