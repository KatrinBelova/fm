import "@material-ui/core/styles";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    darkBg?: Palette["primary"];
  }
  interface PaletteOptions {
    darkBg?: PaletteOptions["primary"];
  }
}
