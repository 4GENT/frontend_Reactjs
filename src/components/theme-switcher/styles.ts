import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    iconBlock: {
      paddingRight: "37px",
      paddingTop: "10px",
    },
    themeIcon: {
      marginRight: "45px",
    },
  };
});
