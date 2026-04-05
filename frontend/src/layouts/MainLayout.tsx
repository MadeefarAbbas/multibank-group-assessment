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
        <Toolbar
          sx={{
            px: { xs: 2, sm: 3 },
            py: { xs: 1, sm: 1.25 },
            gap: 1.5,
            flexWrap: { xs: "wrap", sm: "nowrap" },
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" }, flexShrink: 0 }}
          >
            Trading Dashboard
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }} />

          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{ width: { xs: "100%", sm: "auto" }, ml: { xs: 0, sm: "auto" } }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ px: { xs: 2, sm: 3 }, py: { xs: 2, sm: 3 } }}>{children}</Box>
    </>
  );
};