import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@material-ui/core";

export const SettingsPassword = (props) => {
  const [pass, setPassword] = React.useState("");

  const [values, setValues] = useState({
    password: "",
    confirm: "",
  });

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const userPass = async () => {
    await fetch("api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pass,
      }),
    });

    window.location.reload();
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader subheader="Update password" title="Password" />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            required
            name="password"
            onChange={handleChange}
            type="password"
            InputLabelProps={{ shrink: true }}
            value={values.password}
            variant="outlined"
            onInput={handlePass}
          />
          <TextField
            fullWidth
            required
            label="Confirm password"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button
            style={{
              fontWeight: "600",
              textTransform: "none",
              marginTop: "15px",
              marginBottom: "15px",
              marginRight: "15px",
              float: "right",
            }}
            color="primary"
            variant="contained"
            onClick={userPass}
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};
