import React from "react";
import { Button } from "@material-ui/core";
import { Autorenew } from "@material-ui/icons";

const Compile = ({ compile }) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={compile}
        startIcon={<Autorenew />}
      >
        Compile
      </Button>
    </div>
  );
};

export default Compile;
