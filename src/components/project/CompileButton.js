import React from "react";
import { Button } from "@material-ui/core";
import { Autorenew } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  refresh: {
    "&.spin": {
      animation: "$spin 1s 1",
      pointerEvents: "none",
    },
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));

const Compile = () => {
  const [spin, setSpin] = React.useState(false);
  const classes = useStyles();

  const refreshCanvas = () => {
    setSpin(true);
    setTimeout(() => {
      setSpin(false);
    }, 1000);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={refreshCanvas}
        startIcon={
          <Autorenew
            className={clsx({
              [classes.refresh]: true,
              spin: spin,
            })}
            spin={360}
          />
        }
        style={{
          paddingBottom: "4px",
          fontSize: "calc(2px + 1.5vmin)",
        }}
      >
        Compile
      </Button>
    </div>
  );
};

export default Compile;
