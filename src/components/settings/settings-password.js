import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@material-ui/core";

export const SettingsPassword = () => {
  return (
    <form>
      <Card>
        <CardHeader subheader="Update password" title="Password" />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            helperText="Your current password"
            name="password"
            // onChange={}
            type="password"
            InputLabelProps={{ shrink: true }}
            // value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="New password"
            margin="normal"
            helperText="Please specify your new password"
            name="password"
            // onChange={}
            type="password"
            // value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            name="confirm"
            helperText="Please re-enter your new password"
            // onChange={}
            type="password"
            // value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box>
          <Button
            style={{
              fontWeight: "400",
              textTransform: "none",
              marginTop: "15px",
              marginBottom: "15px",
              marginRight: "15px",
              float: "right",
            }}
            color="primary"
            variant="contained"
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};
