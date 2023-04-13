import { Box, Button, Tooltip, Typography } from "@mui/material";
import React from "react";
import BasicTabs from "../components/BasicTabs";
import MyAccordions from "../components/MyAccordions";
import InfoModal from "../components/InfoModal";
import FormModal from "../components/FormModal";

export default function UtilitiesPage() {
  return (
    <Box width={"100%"}>
      <Typography variant="h4" align="center">
        Some More Utilities
      </Typography>

      {/* Tool Tip */}
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

      {/* Tabs */}
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6" align="left">
          Tabs
        </Typography>
        <BasicTabs />
      </Box>

      {/* Accordions */}
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6" align="left">
          Accordions
        </Typography>
        <MyAccordions />
      </Box>

      {/* Modals */}
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6" align="left">
          Modals
        </Typography>
        <InfoModal />
        <FormModal />
      </Box>
    </Box>
  );
}
