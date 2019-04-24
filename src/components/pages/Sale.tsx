import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Sale: React.FC = () => {
  return (
    <>
      <Typography variant="h5">メロンパンアイスを売るぞ!</Typography>
      <Typography variant="h5">残量: 30個</Typography>
      <Button fullWidth variant="contained" size="large" color="primary">
        売った
      </Button>
    </>
  );
};

export default Sale;
