import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { logout } from "../services/auth";

export const MainLayout = ({ children }: any) => {
  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Trading Dashboard
          </Typography>

          {/* Push logout button to right */}
          <Box sx={{ flexGrow: 1 }} />

          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ padding: 3 }}>{children}</Box>
    </>
  );
};