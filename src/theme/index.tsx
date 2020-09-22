import { createMuiTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface ThemeOptions {
    themeName?: string; // optional
  }
}

const palette = {
  primary: {
    main: "#f1e300",
  },
  darkBg: {
    main: "#292929",
  },
  secondary: {
    main: "#ff0060",
  },
};

const overrides = {
  MuiContainer: {
    root: {
      width: "90%",
    },
  },
};

const themeName = "default";

export default createMuiTheme({ palette, overrides, themeName });
