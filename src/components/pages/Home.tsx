import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Home: React.FC = () => (
  <>
    <Typography>coins19:3クラスのやどかり祭の売上管理アプリです。</Typography>
    <Typography>
      開発は<Link href="https://twitter.com/__sosukesuzuki">鈴木颯介</Link>
      がしているので、要望や文句があるときはDMとかしてください。
    </Typography>
  </>
);

export default Home;
