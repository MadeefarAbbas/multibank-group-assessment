import { useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { isAuthenticated } from "./services/auth";
import { Login } from "./pages/Login";
import App from "./App";

export default function AppWrapper() {
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());
  const [loadingDashboard, setLoadingDashboard] = useState(false);

  const handleLogin = () => {
    setLoadingDashboard(true);

    setTimeout(() => {
      setLoggedIn(true);
      setLoadingDashboard(false);
    }, 1200);
  };

  if (loadingDashboard) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        gap={2}
      >
        <CircularProgress />
        <Typography variant="h6">Loading dashboard...</Typography>
      </Box>
    );
  }

  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return <App />;
}