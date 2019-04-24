import React, { useMemo } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMelonpanIceStock from "../../lib/hooks/useMelonpanIceStock";

const Sale: React.FC = () => {
  const stock = useMelonpanIceStock();
  const isLoading = useMemo(() => stock === null, [stock]);

  return (
    <>
      <Typography variant="h5">メロンパンアイスを売るぞ!</Typography>
      {!isLoading && (
        <>
          <Typography variant="h5">残量: {stock}個</Typography>
          <Button fullWidth variant="contained" size="large" color="primary">
            売った
          </Button>
        </>
      )}
    </>
  );
};

export default Sale;
