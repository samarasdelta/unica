import React from "react";
// import React, { useEffect, useHistory, useCallback } from "react";
import {
  Box,
  Grid,
  CardHeader,
  Divider,
  TextField,
  CardContent,
  Card,
  Button,
} from "@material-ui/core";

export default function AccountProfile() {
  const verifiedToken = localStorage.token;
  // let history = useHistory();

  const [fname, setFirstName] = React.useState("");
  const [sname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const updateUser = async () => {
    await fetch(`/api/users/me`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${verifiedToken}`,
      },
      body: JSON.stringify({
        fname,
        sname,
        email,
      }),
    });
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Personal info"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="title"
                id="title"
                defaultValue={fname}
                label="First name"
                name="fname"
                variant="outlined"
                onInput={(e) => {
                  handleFirstNameChange(e);
                }}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                defaultValue={sname}
                label="Last name"
                name="sname"
                variant="outlined"
                onInput={(e) => {
                  handleLastNameChange(e);
                }}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                defaultValue={email}
                label="Email address"
                name="email"
                type="email"
                variant="outlined"
                onInput={(e) => {
                  handleEmailChange(e);
                }}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />

        <Box m={2}>
          <Button
            style={{
              fontWeight: "400",
              textTransform: "none",
              marginBottom: "15px",
              float: "right",
            }}
            type="submit"
            color="primary"
            variant="contained"
            onClick={updateUser}
            // onClick={(e) => {
            //   updateUser();
            // }}
          >
            Save details
          </Button>
        </Box>
      </Card>
    </div>
  );
}
