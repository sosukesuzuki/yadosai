import React, { useState } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useNavigation } from "react-navi";
import debounce from "lodash.debounce";
import login from "../../lib/firebase/login";

const styles = createStyles({
  textField: {
    marginTop: "10px"
  },
  button: {
    marginTop: "20px"
  },
  message: {
    marginTop: "15px"
  }
});

type Props = WithStyles<typeof styles>;

type FormState = {
  email: string;
  password: string;
};

const Login: React.FC<Props> = ({ classes }) => {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: ""
  });
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigation = useNavigation();

  function handleClickButton() {
    setIsConfirmed(true);

    login({
      email: formState.email,
      password: formState.password
    }).then(debounce(navigateToHome, 2000));
  }

  function navigateToHome() {
    navigation.navigate("/");
  }

  return (
    <>
      <Typography>
        設定したメールアドレスとパスワードを使ってログインをしてください。
      </Typography>
      <TextField
        label="メールアドレス"
        value={formState.email}
        fullWidth
        onChange={e => {
          e.persist();
          setFormState(state => ({
            ...state,
            email: (e.target as any).value
          }));
        }}
        className={classes.textField}
        disabled={isConfirmed}
      />
      <TextField
        label="パスワード"
        value={formState.password}
        fullWidth
        onChange={e => {
          e.persist();
          setFormState(state => ({
            ...state,
            password: (e.target as any).value
          }));
        }}
        className={classes.textField}
        type="password"
        disabled={isConfirmed}
      />
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        onClick={handleClickButton}
        disabled={isConfirmed}
      >
        ログイン
      </Button>
      {isConfirmed && (
        <div className={classes.message}>
          <Typography>
            ログイン完了です。さあメロンパンアイスを売りましょう！
          </Typography>
          <Typography>トップページに戻ります。</Typography>
        </div>
      )}
    </>
  );
};

export default withStyles(styles)(Login);
