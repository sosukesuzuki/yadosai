import React, { useMemo } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import useUser from "../../lib/hooks/useUser";

const styles = createStyles({
  head5: {
    marginTop: "15px"
  }
});

type Props = WithStyles<typeof styles>;

const Home: React.FC<Props> = ({ classes }) => {
  const user = useUser();
  const isLoggedIn = useMemo(() => !!user, [user]);

  return (
    <>
      <Typography>coins19:3クラスのやどかり祭の売上管理アプリです。</Typography>
      <Typography>
        開発は<Link href="https://twitter.com/__sosukesuzuki">鈴木颯介</Link>
        がしているので、要望や文句があるときはDMとかしてください。
      </Typography>
      <Typography variant="h5" className={classes.head5}>
        使い方
      </Typography>
      {isLoggedIn ? (
        <Typography>さあ、右上のアイコンをタップして売るぞ。</Typography>
      ) : (
        <Typography>
          まず、アカウントをお持ちの方はログインをお願いします。持っていない方はアカウントを作成してください。
        </Typography>
      )}
    </>
  );
};

export default withStyles(styles)(Home);
