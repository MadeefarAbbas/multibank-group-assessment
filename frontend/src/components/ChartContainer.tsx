import { Paper, Typography } from "@mui/material";

export const ChartContainer = ({ children, title }: any) => (
  <Paper
    sx={{
      p: { xs: 2, sm: 3 },
      mt: { xs: 2, md: 3 },
      borderRadius: 3,
      overflow: "hidden",
    }}
  >
    <Typography
      variant="h6"
      sx={{ mb: 1, fontSize: { xs: "1.1rem", sm: "1.25rem" }, wordBreak: "break-word" }}
    >
      {title}
    </Typography>
    {children}
  </Paper>
);