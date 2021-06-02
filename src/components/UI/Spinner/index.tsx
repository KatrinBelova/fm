import React from "react";
import { CircularProgress, Box } from "@material-ui/core";

const Spinner = () => {
  return (
    <Box m={"auto"} pt={2} pb={2}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
