import React, { useEffect } from "react";
import PropTypes from "prop-types";
import LatexEditor from "./LatexEditor";
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import AppBarCustom from "../tools/AppBarCustom";
// import DownloadButton from "./DownloadButton";
import CompileButton from "./buttons/CompileButton";
import CopyLinkButton from "./buttons/CopyLinkButton";
import SaveButton from "./buttons/SaveButton";
import "./democss.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1,
    overflow: "hidden",
    width: "auto",
  },
  toolbar: {
    paddingLeft: "0.44rem",
    paddingRight: "0.44rem",
  },
});

const Project = (props) => {
  const { id } = props;
  const classes = useStyles();

  const [text, setText] = React.useState("");
  const [link, setLink] = React.useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const compile = () => {
    fetch("/api/latex", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: text,
    })
      .then((response) => response.json())
      .then((data) => {
        setLink(data.pdf);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const saveProject = async () => {
    await fetch(`/api/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setText(data.projectInfo);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [id]);

  return (
    <div>
      <AppBarCustom />
      <div className={classes.root}>
        <AppBar position="relative" color="secondary" className="App-header">
          <Toolbar className={classes.toolbar}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <div className="space">
                  <Grid
                    spacing={1}
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Grid item>
                      <CompileButton compile={compile} />
                    </Grid>
                    <Grid item>
                      <SaveButton saveProject={saveProject} text={text} />
                    </Grid>
                    <Grid item>
                      <CopyLinkButton link={link} />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <header className="dflt">
                  <Grid
                    spacing={1}
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography
                        style={{
                          fontSize: "1.2rem",
                        }}
                        color="textSecondary"
                      >{`Title: `}</Typography>
                    </Grid>

                    <Grid item>
                      <Typography
                        style={{
                          fontSize: "1.2rem",
                        }}
                        color="primary"
                      >
                        {`${props.project.projectTitle}`}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{
                          fontSize: "1.2rem",
                        }}
                        color="textSecondary"
                      >
                        {`Category: `}
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography
                        style={{
                          fontSize: "1.2rem",
                        }}
                        color="primary"
                      >
                        {`${props.project.projectCategory}`}
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* </span> */}
                </header>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      <LatexEditor
        savedText={text}
        onTextChange={handleTextChange}
        link={link}
      />
    </div>
  );
};

export default Project;

Project.propTypes = {
  id: PropTypes.string,
  project: PropTypes.shape({
    projectTitle: PropTypes.string,
    projectCategory: PropTypes.string,
  }),
};
