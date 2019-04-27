import React, { useMemo, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMelonpanIceStock from "../../lib/firebase/hooks/useMelonpanIceStock";
import sellMelonpanIce from "../../lib/firebase/sellMelonpanIce";
import CircularProgress from "@material-ui/core/CircularProgress";
import useUser from "../../lib/firebase/hooks/useUser";

const Sale: React.FC = () => {
  const stock = useMelonpanIceStock();
  const [isLoading, setIsLoading] = useState(false);
  const isStockNull = useMemo(() => stock === null, [stock]);
  const user = useUser();
  const isLoggedIn = useMemo(() => !!user, [user]);

  if (!isLoggedIn) {
    return (
      <Typography variant="h5">
        まず右上の「登録」ボタンから登録をお願いします!
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h5">メロンパンアイスを売るぞ!</Typography>
      {!isLoading && !isStockNull ? (
        <>
          <Typography variant="h5">残量: {stock}個</Typography>
          <Button
            fullWidth
            variant="contained"
            size="large"
            color="primary"
            onClick={() => {
              setIsLoading(true);
              sellMelonpanIce().then(() => {
                setIsLoading(false);
              });
            }}
          >
            売った
          </Button>
        </>
      ) : (
        <div>
          <CircularProgress color="primary" />
        </div>
      )}
    </>
  );
};

export default Sale;
