import React, { useMemo } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import useUser from "../../lib/firebase/hooks/useUser";
import { useNavigation } from "react-navi";

const Home: React.FC = () => {
  const user = useUser();
  const isLoggedIn = useMemo(() => !!user, [user]);
  const navigation = useNavigation();

  return (
    <>
      <Typography>coins19:3クラスのやどかり祭の売上管理アプリです。</Typography>
      <Typography>
        開発は<Link href="https://twitter.com/__sosukesuzuki">鈴木颯介</Link>
        がしているので、要望や文句があるときはDMとかしてください。
      </Typography>
      {isLoggedIn ? (
        <>
          <Typography>たくさん売っちゃってください。</Typography>
          <Button
            fullWidth
            variant="contained"
            size="large"
            color="primary"
            onClick={() => {
              navigation.navigate("/sale");
            }}
          >
            販売ページへ
          </Button>
        </>
      ) : (
        <>
          <Typography>
            まず、アカウントをお持ちの方はログインをお願いします。持っていない方はアカウントを作成してください。
          </Typography>
          <Button
            style={{ margin: "10px 0" }}
            fullWidth
            variant="contained"
            size="large"
            color="primary"
            onClick={() => {
              navigation.navigate("/register");
            }}
          >
            アカウント作成
          </Button>
          <Button
            fullWidth
            variant="contained"
            size="large"
            color="primary"
            onClick={() => {
              navigation.navigate("/login");
            }}
          >
            ログイン
          </Button>
        </>
      )}
    </>
  );
};

export default Home;
