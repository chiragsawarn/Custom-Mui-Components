import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import kotakLifeLogo from "../assets/kotak-life-logo.png";
import Paper from "@mui/material/Paper";
import CallIcon from "@mui/icons-material/Call";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ReplayIcon from "@mui/icons-material/Replay";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

const drawerWidth = 240;

function Navbar(props) {
  const theme = useTheme().palette.mode;

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        component="img"
        sx={{
          width: 200,
          margin: "20px",
          display: { xs: "block", sm: "block" },
        }}
        alt="Kotak Life Insurance Logo"
        src={kotakLifeLogo}
      />
      <Divider />
      <List>
        <ListItem
          disablePadding
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            variant={theme === "light" ? "ghost3" : "ghost4"}
            startIcon={<ReplayIcon />}
          >
            Resume Application
          </Button>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            variant={theme === "light" ? "ghost3" : "ghost4"}
            startIcon={<CallIcon />}
          >
            Contact Us
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "inherit", height: "62px" }}
      >
        <Toolbar>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ m: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              sx={{
                width: 100,
                display: { xs: "none", sm: "block" },
              }}
              alt="Kotak Life Insurance Logo"
              src={kotakLifeLogo}
            />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              startIcon={<ReplayIcon />}
              variant={theme === "light" ? "ghost3" : "ghost4"}
            >
              Resume Application
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              id="basic-button"
              startIcon={<CallIcon />}
              endIcon={<KeyboardArrowDownIcon />}
              variant={theme === "light" ? "ghost3" : "ghost4"}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Contact Us
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{ width: "300px" }}
            >
              <MenuItem>Our experts are here to help you:</MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography> Email</Typography>
                <Typography color={"primary.main"}>
                  {" "}
                  support@kotak.com
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography> Call Us</Typography>
                <Typography color={"primary.main"}> 1800 209 8800</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Paper>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
