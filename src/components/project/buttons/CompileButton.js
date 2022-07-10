import React from "react";
import { Button } from "@material-ui/core";
import { Autorenew } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";

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

const Compile = ({ compile, saveProject }) => {
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
        onClick={() => {
          refreshCanvas();
          compile();
          saveProject();
        }}
        startIcon={
          <Autorenew
            className={clsx({
              [classes.refresh]: true,
              spin: spin,
            })}
            spin={360}
          />
        }
      >
        Compile
      </Button>
    </div>
  );
};

export default Compile;

Compile.propTypes = {
  compile: PropTypes.func.isRequired,
  saveProject: PropTypes.func.isRequired,
};
