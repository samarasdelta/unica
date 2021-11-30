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
            helperText="Please specify your password"
            required
            name="password"
            // onChange={}
            type="password"
            InputLabelProps={{ shrink: true }}
            // value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            required
            label="Confirm password"
            margin="normal"
            name="confirm"
            // onChange={}
            type="password"
            // value={values.confirm}
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
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};
