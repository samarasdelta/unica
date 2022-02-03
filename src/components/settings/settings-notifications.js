import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@material-ui/core";

export const SettingsNotifications = (props) => (
  <form {...props}>
    <Card>
      <CardHeader subheader="Manage the notifications" title="Notifications" />
      <Divider />
      <CardContent>
        <Grid container spacing={6}>
          <Grid
            item
            md={4}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            xs={12}
          >
            <Typography color="textPrimary" gutterBottom variant="h6">
              Notifications
            </Typography>
            <FormControlLabel
              control={<Checkbox color="primary" defaultChecked />}
              label="Email"
            />
            <FormControlLabel
              control={<Checkbox color="primary" defaultChecked />}
              label="Push Notifications"
            />
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            xs={12}
          >
            <Typography color="textPrimary" gutterBottom variant="h6">
              Messages
            </Typography>
            <FormControlLabel
              control={<Checkbox color="primary" defaultChecked />}
              label="Email"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Push Notifications"
            />
          </Grid>
        </Grid>
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
          // onClick={createUser}
        >
          Save
        </Button>
      </Box>
    </Card>
  </form>
);
