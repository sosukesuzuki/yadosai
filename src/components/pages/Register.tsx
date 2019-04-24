import React, { useState } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { setName as setNameToLocalStorage } from "../../lib/localstorage";
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
  const navigation = useNavigation();

  function handleClickButton() {
    setNameToLocalStorage(name);
    setIsConfirmed(true);
    debounce(navigateToHome, 2100)();

    function navigateToHome() {
      navigation.navigate("/");
    }
  }

  return (
    <>
      <Typography>
        お名前をフルネームで、名字と名前の間に半角スペースを空けて入力してください。
      </Typography>
      <Typography>（例： 田中 太郎）</Typography>
      <TextField
        label="お名前"
        value={name}
        fullWidth
        onChange={e => {
          setName((e.target as any).value);
        }}
        className={classes.textField}
      />
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        onClick={handleClickButton}
      >
        登録
      </Button>
      {isConfirmed && (
        <div className={classes.message}>
          <Typography>
            登録ありがとうございます!頑張って売りましょう!
          </Typography>
          <Typography>トップページに戻ります。</Typography>
        </div>
      )}
    </>
  );
};

export default withStyles(styles)(Register);
