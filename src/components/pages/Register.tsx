import React, { useState } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigation } from "react-navi";
import debounce from "lodash.debounce";
import createUser from "../../lib/firebase/createUser";

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

type State = {
  displayName: string;
  email: string;
  password: string;
};

const Register: React.FC<Props> = ({ classes }) => {
  const [formState, setFormState] = useState<State>({
    displayName: "",
    email: "",
    password: ""
  });
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigation = useNavigation();

  function handleClickButton() {
    setIsConfirmed(true);

    createUser({
      displayName: formState.displayName,
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
        お名前とメールアドレスとパスワードを入力して登録をお願いします。
      </Typography>
      <TextField
        label="お名前"
        value={formState.displayName}
        fullWidth
        onChange={e => {
          e.persist();
          setFormState(state => ({
            ...state,
            displayName: (e.target as any).value
          }));
        }}
        className={classes.textField}
        disabled={isConfirmed}
      />
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
        disabled={isConfirmed}
      />
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        onClick={handleClickButton}
        disabled={isConfirmed}
      >
        登録
      </Button>
      {isConfirmed && (
        <div className={classes.message}>
          <Typography>
            登録ありがとうございます！頑張って売りましょう！
          </Typography>
          <Typography>トップページに戻ります。</Typography>
        </div>
      )}
    </>
  );
};

export default withStyles(styles)(Register);
