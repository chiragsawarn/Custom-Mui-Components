import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Paper } from "@mui/material";
import TextInput from "../components/TextInput";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FormModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="outlined"
        color="primary"
        sx={{ marginTop: "10px" }}
      >
        Form modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Paper sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Heading of the modal
            </Typography>
            <TextInput label="First Name" width="100%" />
            <TextInput label="Last Name" width="100%" />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "80px",
                gap: "10px",
              }}
            >
              <Button onClick={handleClose} variant="outlined" color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} variant="contained" color="primary">
                Save
              </Button>
            </Box>
          </Paper>
        </Box>
      </Modal>
    </div>
  );
}
