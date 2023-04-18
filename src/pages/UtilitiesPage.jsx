import { Box, Button, Tooltip, Typography } from "@mui/material";
import React from "react";
import BasicTabs from "../components/BasicTabs";
import MyAccordions from "../components/MyAccordions";
import InfoModal from "../components/InfoModal";
import FormModal from "../components/FormModal";
import ProgressIndicator from "../components/ProgressIndicator";
import Navbar from "../components/Navbar";

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

      {/* Progress Indicator */}
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6" align="left">
          Progress Indicator 1
        </Typography>
        <ProgressIndicator />
      </Box>

      {/* Progress Indicator */}
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6" align="left">
          Progress Indicator 2
        </Typography>
        <ProgressIndicator alternativeLabel={false} />
      </Box>

      {/* Navbar */}
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h6" align="left">
          Navbar
        </Typography>
        <Navbar />
      </Box>
    </Box>
  );
}
