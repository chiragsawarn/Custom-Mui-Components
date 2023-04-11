import { Box, Button, Tooltip, Typography } from "@mui/material";
import React from "react";

export default function UtilitiesPage() {
  return (
    <Box width={"100%"} height={"500px"}>
      <Typography variant="h4" align="center">
        Some More Utilities
      </Typography>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6" align="left">
          Tooltips
        </Typography>
        <Tooltip
          variant="light"
          title="Some text here for the tooltip overrided in the theme!"
        >
          <Button variant="contained" color="primary">
            Hover Over To View Tooltip
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
}
