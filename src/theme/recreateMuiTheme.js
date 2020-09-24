import { createMuiTheme, colors } from "@material-ui/core";
import { colorValues, modes } from "../utils";

const recreateMuiTheme = (
  mode = modes.DARK,
  primary = colorValues.BLACK,
  secondary = colorValues.WHITE
) => {
  return createMuiTheme({
    palette: {
      type: mode,
      primary: colors[primary],
      secondary: colors[secondary],
    },
  });
};

export default recreateMuiTheme;
