import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import { getIsRegisterd } from "../../lib/localStorage";

const styles = createStyles({
  head5: {
    marginTop: "15px"
  }
});

type Props = WithStyles<typeof styles>;

const Home: React.FC<Props> = ({ classes }) => {
  const isRegisterd = getIsRegisterd();
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
      {isRegisterd ? (
        <Typography>
          登録ありがとうございます。さあ、右上の「売るぞ」をタップして売るぞ。
        </Typography>
      ) : (
        <Typography>
          まず、お名前の登録をお願いします。右上の「登録」ボタンをタップし、ページの指示に従ってお名前を登録してください。
        </Typography>
      )}
    </>
  );
};

export default withStyles(styles)(Home);
