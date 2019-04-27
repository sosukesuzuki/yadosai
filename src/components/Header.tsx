import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { createStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { useNavigation } from "react-navi";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SideList from "./SideList";

const styles = createStyles({
  root: {
    flexGrow: 1,
    padding: "10px 0px",
    display: "flex"
  },
  grow: {
    flexGrow: 1
  }
});

type Props = WithStyles<typeof styles>;

const Header: React.FC<Props> = ({ classes }) => {
  const [shownSideList, setShownSideList] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => {
              setShownSideList(prev => !prev);
            }}
          >
            <MenuIcon />
          </IconButton>
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
        </Toolbar>
      </AppBar>
      <SideList
        open={shownSideList}
        onClose={() => {
          setShownSideList(false);
        }}
      />
    </>
  );
};

export default withStyles(styles)(Header);
