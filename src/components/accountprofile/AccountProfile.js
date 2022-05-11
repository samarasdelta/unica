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
                label="First name"
                name="fname"
                variant="outlined"
                // onInput={handleFirstNameChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="sname"
                variant="outlined"
                // onInput={handleSurNameChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email address"
                name="email"
                type="email"
                variant="outlined"
                // onInput={handleEmailChange}
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
          >
            Save details
          </Button>
        </Box>
      </Card>
    </div>
  );
}
