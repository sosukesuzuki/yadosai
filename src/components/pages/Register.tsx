import React, { useState } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { setName as setNameToLocalStorage } from "../../lib/localStorage";
import { useNavigation } from "react-navi";
import debounce from "lodash.debounce";

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

const Register: React.FC<Props> = ({ classes }) => {
  const [name, setName] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const navigation = useNavigation();

  function handleClickButton() {
    const isValid = validate(name);
    if (!isValid) {
      setIsInvalid(true);
      return;
    }

    setNameToLocalStorage(name);
    setIsConfirmed(true);
    debounce(navigateToHome, 2100)();

    function navigateToHome() {
      navigation.navigate("/");
    }

    function validate(value: string): boolean {
      if (value.split(" ").length > 1) {
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <>
      <Typography>
        お名前をフルネームで、名字と名前の間に半角スペースを空けて入力してください。
      </Typography>
      <Typography>（例： 田中 太郎）</Typography>
      {isInvalid && (
        <Typography className={classes.message} color="error">
          名前が不正です。
        </Typography>
      )}
      <TextField
        label="お名前"
        value={name}
        fullWidth
        onChange={e => {
          if (isInvalid) setIsInvalid(false);
          setName((e.target as any).value);
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
