import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import withStyles, {
  StyleRules,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import { createStyles } from "@material-ui/core";

const styles: StyleRules = createStyles({
  root: {
    padding: "10px 30px"
  }
});

type Props = WithStyles<typeof styles>;

const Header: React.FC<Props> = ({ classes }) => (
  <AppBar className={classes.root}>
    <Typography variant="h6" color="inherit">
      メロンパンアイス
    </Typography>
  </AppBar>
);

export default withStyles(styles)(Header);
