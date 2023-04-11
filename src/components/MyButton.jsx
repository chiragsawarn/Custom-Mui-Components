import React from "react";
import Button from "@mui/material/Button";

export default function MyButton({ children, type }) {
  const styles = {
    color: "#fff",
    textTransform: "capitalize",
    borderRadius: "20px 20px 20px 20px",
    backgroundColor: "var(--color-primary)",
    "&:hover": { backgroundColor: "#F53D45" },
    margin: "0 10%",
    padding: "8px 60px",
  };

  switch (type) {
    case "secondary":
      {
        styles["backgroundColor"] = "var(--color-secondary)";
        styles["&:hover"]["backgroundColor"] = "#0C3C6C";
      }
      break;
    case "tertiary":
      {
        styles["backgroundColor"] = "#fff";
        styles["border"] = "1px solid var(--color-secondary)";
        styles["color"] = "var(--color-secondary)";
        styles["&:hover"]["backgroundColor"] = "#fff";
      }
      break;
    case "disabled":
      {
        styles["backgroundColor"] = "#D9D9D9";
        styles["color"] = "var(--typography-high-emphasis)";
        styles["&:hover"]["backgroundColor"] = "#D9D9D9";
      }
      break;
    case "ghost1":
      {
        styles["color"] = "var(--color-secondary)";
        styles["border"] = "none";
        styles["boxShadow"] = "none";
        styles["backgroundColor"] = "transparent";
        styles["&:hover"] = {
          boxShadow: "none",
          backgroundColor: "transparent",
          color: "var(--color-primary)",
          textDecoration: "underline",
        };
      }
      break;
    case "ghost2":
      {
        styles["color"] = "var(--color-accent)";
        styles["border"] = "none";
        styles["boxShadow"] = "none";
        styles["backgroundColor"] = "transparent";
        styles["&:hover"] = {
          boxShadow: "none",
          backgroundColor: "transparent",
          textDecoration: "underline",
        };
      }
      break;
    case "ghost3":
      {
        styles["color"] = "var(--color-secondary)";
        styles["border"] = "none";
        styles["boxShadow"] = "none";
        styles["backgroundColor"] = "transparent";
        styles["borderRadius"] = "3px";
        styles["&:hover"] = {
          boxShadow: "none",
          backgroundColor: "#D4E1F7",
        };
      }
      break;
    case "ghost4":
      {
        styles["color"] = "var(--color-accent)";
        styles["border"] = "none";
        styles["boxShadow"] = "none";
        styles["backgroundColor"] = "transparent";
        styles["borderRadius"] = "3px";
        styles["&:hover"] = {
          boxShadow: "none",
          backgroundColor: "#E6EFFE",
        };
      }
      break;
    default: {
    }
  }
  return (
    <Button variant="contained" sx={styles}>
      {children}
    </Button>
  );
}
