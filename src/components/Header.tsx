import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { createStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { useNavigation } from "react-navi";
import useIsRegisterd from "../lib/hooks/useIsRegisterd";

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

const Header: React.FC<Props> = ({ classes }) => {
  const navigation = useNavigation();
  const isRegisterd = useIsRegisterd();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          className={classes.grow}
          onClick={() => {
            navigation.navigate("/");
          }}
        >
          メロンパンアイス
        </Typography>
        {!isRegisterd && (
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              navigation.navigate("/register");
            }}
          >
            登録
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
