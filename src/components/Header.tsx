import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { createStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

const styles = createStyles({
  root: {
    flexGrow: 1,
    padding: "10px 20px",
    display: "flex"
  },
  grow: {
    flexGrow: 1
  }
});

type Props = WithStyles<typeof styles>;

const Header: React.FC<Props> = ({ classes }) => (
  <AppBar className={classes.root}>
    <Toolbar>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        メロンパンアイス
      </Typography>
      <Button size="small" variant="contained">
        登録
      </Button>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
