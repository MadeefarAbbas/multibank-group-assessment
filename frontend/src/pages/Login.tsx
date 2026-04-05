import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import { login } from "../services/auth";

export const Login = ({ onLogin }: any) => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");

  const handleLogin = () => {
    const success = login(username, password);

    if (success) {
      onLogin();
    } else {
      alert("Invalid credentials (use admin/admin)");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
          <Typography variant="h5" align="center" gutterBottom>
            Trading Dashboard Login
          </Typography>

          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};