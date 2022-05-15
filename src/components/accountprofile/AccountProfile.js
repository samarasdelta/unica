// import React from "react";
// import React, { useEffect, useHistory } from "react";
import React from "react";
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
                // defaultValue={fname}
                label="First name"
                name="fname"
                variant="outlined"
                // onInput={(e) => {
                //   handleFirstNameChange(e);
                // }}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                // defaultValue={sname}
                label="Last name"
                name="sname"
                variant="outlined"
                // onInput={(e) => {
                //   handleLastNameChange(e);
                // }}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                // defaultValue={email}
                label="Email address"
                name="email"
                type="email"
                variant="outlined"
                // onInput={(e) => {
                //   handleEmailChange(e);
                // }}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />

        <Box>
          <Button
            style={{
              fontWeight: "400",
              textTransform: "none",
              marginBottom: "15px",
              marginRight: "15px",
              float: "right",
            }}
            color="primary"
            variant="contained"
            // onClick={updateUser}
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
