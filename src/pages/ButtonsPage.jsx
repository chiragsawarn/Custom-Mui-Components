import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CallIcon from "@mui/icons-material/Call";

export default function ButtonsPage() {
  const theme = useTheme();
  return (
    <Box width={"100%"}>
      <Typography variant="h4" align="center">
        Buttons
      </Typography>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6" align="left">
          Primary Contained
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </Box>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6" align="left">
          Primary Outlined
        </Typography>
        <Button variant="outlined" color="primary">
          Click Me
        </Button>
        <Button variant="outlined" color="primary" endIcon={<AddIcon />}>
          Click Me
        </Button>
      </Box>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6" align="left">
          Secondary Contained
        </Typography>
        <Button variant="contained" color="secondary">
          Click Me
        </Button>
      </Box>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6" align="left">
          Secondary Outlined
        </Typography>
        <Button variant="outlined" color="secondary">
          Click Me
        </Button>
      </Box>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6" align="left">
          Ghost
        </Typography>

        <Button variant="ghost1" disableRipple>
          Ghost1
        </Button>
        <Button variant="ghost2" disableRipple>
          Ghost2
        </Button>
        <Button variant="ghost3" startIcon={<CallIcon />}>
          Ghost3
        </Button>
        <Button variant="ghost4" startIcon={<CallIcon />}>
          Ghost4
        </Button>
      </Box>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6" align="left">
          Disabled
        </Typography>
        <Button variant="primary" disabled>
          Click Me
        </Button>
      </Box>
    </Box>
  );
}
