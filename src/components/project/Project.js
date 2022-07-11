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
import AddAbstract from "../tools/AddAbstract";
import DownloadButton from "./buttons/DownloadButton";
import CompileButton from "./buttons/CompileButton";
import CopyLinkButton from "./buttons/CopyLinkButton";
import OpenButton from "./buttons/OpenButton";
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

  const compile = async () => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/api/latex`, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: encodeURIComponent(text),
      })
        .then((response) => {
          console.log("response", response);

          if (response.ok) {
            return response;
          }
        })
        .then((response) => response.json())
        .then((data) => {
          setLink(data.pdf);
        });
    } catch (error) {
      alert("Your LaTeX code is not correct!");
    }
  };

  const downloadPdf = async () => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/api/latex/download/pdf`, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: encodeURIComponent(text),
      })
        .then((response) => {
          console.log("response", response);

          if (response.ok) {
            return response;
          }
        })
        .then((response) => response.json())
        .then((data) => {
          setLink(data.pdf);
        });
    } catch (error) {
      alert("Your LaTeX code is not correct!");
    }
  };

  const downloadTex = async () => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/api/latex/download/tex`, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: encodeURIComponent(text),
      })
        .then((response) => {
          console.log("response", response);

          if (response.ok) {
            return response;
          }
        })
        .then((response) => response.json())
        .then((data) => {
          setLink(data.pdf);
        });
    } catch (error) {
      alert("Your LaTeX code is not correct!");
    }
  };

  const saveProject = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/api/projects/${id}`, {
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
    fetch(`${process.env.REACT_APP_API_URL}/api/projects/${id}`)
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
                      <CompileButton
                        compile={compile}
                        saveProject={saveProject}
                      />
                    </Grid>
                    <Grid item>
                      <AddAbstract id={props.id} />
                    </Grid>
                    <Grid item>
                      <SaveButton saveProject={saveProject} text={text} />
                    </Grid>
                    <Grid item>
                      <CopyLinkButton link={link} />
                    </Grid>
                    <Grid item>
                      <OpenButton link={link} />
                    </Grid>
                    <Grid item>
                      <DownloadButton
                        link={link}
                        downloadPdf={downloadPdf}
                        downloadTex={downloadTex}
                      />
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
                          fontSize: "1.4vw",
                        }}
                        color="textSecondary"
                      >{`Title: `}</Typography>
                    </Grid>

                    <Grid item>
                      <Typography
                        style={{
                          fontSize: "1.4vw",
                        }}
                        color="primary"
                      >
                        {`${props.project.projectTitle}`}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{
                          fontSize: "1.4vw",
                        }}
                        color="textSecondary"
                      >
                        {`Category: `}
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography
                        style={{
                          fontSize: "1.4vw",
                        }}
                        color="primary"
                      >
                        {`${props.project.projectCategory}`}
                      </Typography>
                    </Grid>
                  </Grid>
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
