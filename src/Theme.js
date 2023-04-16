import { createTheme } from "@mui/material";
const myPalette = {
  primary: {
    light: "#F53D45",
    main: "#da251c",
  },
  secondary: {
    light: "#0C3C6C",
    main: "#003366",
  },
  accent: {
    main: "#0A85FF",
  },
  error: {
    main: "#ba1b23",
  },
  warning: {
    main: "#FF8E31",
  },
  success: {
    main: "#019429",
  },
  surfaceOne: {
    main: "#999999",
    contrastText: "#fff",
  },
  surfaceTwo: {
    main: "#cccccc",
  },
  surfaceThree: {
    main: "#d4d4d4",
  },
  surfaceFour: {
    main: "#eeeeee",
  },
  surfaceFive: {
    main: "#F4F6FA",
  },
  typography: {
    light: "rgba(34,34,34,0.5)",
    main: "rgba(34,34,34,1)",
  },
  // tonalOffset will set primary.light and primary.dark based on primary.main
  tonalOffset: 0.2,
};

const lightTheme = createTheme({
  palette: myPalette,
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "capitalize",
          borderRadius: "20px 20px 20px 20px",
          textTransform: "capitalize",
          cursor: "pointer",

          "&.MuiButton-containedPrimary": {
            color: "white",
            backgroundColor: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.primary.light,
            },
          },
          "&.MuiButton-containedSecondary": {
            color: "white",
            backgroundColor: theme.palette.secondary.main,
            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
            },
          },
          "&.MuiButton-outlined": {
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
              boxShadow: "0px 12px 20px 0px #00000029",
            },
          },
          "&.Mui-disabled": {
            color: theme.palette.typography.main,
            backgroundColor: "#d9d9d9",
          },
        }),
      },
      variants: [
        {
          props: { variant: "ghost1" },
          style: {
            color: myPalette.secondary.main,
            "&:hover": {
              color: myPalette.primary.main,
              textDecoration: "underline",
              backgroundColor: "transparent",
            },
          },
        },
        {
          props: { variant: "ghost2" },
          style: {
            color: myPalette.accent.main,
            "&:hover": {
              textDecoration: "underline",
              backgroundColor: "transparent",
            },
          },
        },
        {
          props: { variant: "ghost3" },
          style: {
            color: myPalette.secondary.main,
            borderRadius: "3px",
            "&:hover": {
              backgroundColor: "#D4E1F7",
            },
          },
        },
        {
          props: { variant: "ghost4" },
          style: {
            color: myPalette.accent.main,
            borderRadius: "3px",
            "&:hover": {
              backgroundColor: "#E6EFFE",
            },
          },
        },
      ],
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: myPalette.typography.main,
          backgroundColor: "#C4C4C4",
          boxShadow: "0px 12px 20px 0px #00000029",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: "#EEEEEE",
          textTransform: "capitalize",
          color: myPalette.typography.main,
          "&:hover": { backgroundColor: "#D4D4D4" },
          "&.Mui-selected": {
            backgroundColor: "#FFF",
            color: myPalette.accent.main,
            // borderBottom: "2px solid myPalette.accent.main",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#E6EFFE",
          "&.Mui-expanded": {
            backgroundColor: "inherit",
          },
        },
        expanded: {},
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingLeft: "50px",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          flexDirection: "row-reverse",
          gap: "10px",
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-completed": {
            color: myPalette.success.main,
          },
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: { ...myPalette, mode: "dark" },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "capitalize",
          borderRadius: "20px 20px 20px 20px",
          textTransform: "capitalize",
          cursor: "pointer",

          "&.MuiButton-containedPrimary": {
            color: "white",
            backgroundColor: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.primary.light,
            },
          },
          "&.MuiButton-containedSecondary": {
            color: "white",
            backgroundColor: theme.palette.secondary.main,
            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
            },
          },
          "&.MuiButton-outlined": {
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
              boxShadow: "0px 12px 20px 0px #00000029",
            },
          },
          "&.Mui-disabled": {
            color: theme.palette.typography.main,
            backgroundColor: "#d9d9d9",
          },
        }),
      },
      variants: [
        {
          props: { variant: "ghost1" },
          style: {
            color: myPalette.secondary.main,
            "&:hover": {
              color: myPalette.primary.main,
              textDecoration: "underline",
              backgroundColor: "transparent",
            },
          },
        },
        {
          props: { variant: "ghost2" },
          style: {
            color: myPalette.accent.main,
            "&:hover": {
              textDecoration: "underline",
              backgroundColor: "transparent",
            },
          },
        },
        {
          props: { variant: "ghost3" },
          style: {
            color: myPalette.secondary.main,
            borderRadius: "3px",
            "&:hover": {
              backgroundColor: "#D4E1F7",
            },
          },
        },
        {
          props: { variant: "ghost4" },
          style: {
            color: myPalette.accent.main,
            borderRadius: "3px",
            "&:hover": {
              backgroundColor: "#E6EFFE",
            },
          },
        },
      ],
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: "#FFF",
          backgroundColor: myPalette.typography.main,
          boxShadow: "0px 12px 20px 0px #00000029",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          backgroundColor: "#111",
          "&:hover": { backgroundColor: "#2A2A2A" },
          "&.Mui-selected": {
            backgroundColor: "inherit",
            color: myPalette.accent.main,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#2A2A2A",
          "&.Mui-expanded": {
            backgroundColor: "inherit",
          },
        },
        expanded: {},
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingLeft: "50px",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          flexDirection: "row-reverse",
          gap: "10px",
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-completed": {
            color: myPalette.success.main,
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
