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
  const verifiedToken = localStorage.token;

  const [pass, setPassword] = React.useState("");

  const updateUser = async () => {
    await fetch(`/api/users/me`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${verifiedToken}`,
      },
      body: JSON.stringify({
        pass,
      }),
    });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
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
            type="password"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="New password"
            margin="normal"
            helperText="Please specify your new password"
            name="password"
            type="password"
            variant="outlined"
            onInput={(e) => {
              handlePasswordChange(e);
            }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            name="confirm"
            helperText="Please re-enter your new password"
            type="password"
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box m={2}>
          <Button
            disabled={pass === "" ? true : false}
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
          >
            Update
          </Button>
        </Box>
      </Card>
    </div>
  );
};
