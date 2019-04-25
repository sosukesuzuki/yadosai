import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { createStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { useNavigation } from "react-navi";

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

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        {/* TODO: 横からメニューバー出てくる
          ログインしてないときは「ログイン」と「アカウント作成」
          ログイン済みのときは「プロフィール」と「ログアウト」 */}
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
  );
};

export default withStyles(styles)(Header);
