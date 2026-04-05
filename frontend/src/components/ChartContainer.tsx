import { Paper, Typography } from "@mui/material";

export const ChartContainer = ({ children, title }: any) => (
  <Paper sx={{ padding: 2, marginTop: 3 }}>
    <Typography variant="h6">{title}</Typography>
    {children}
  </Paper>
);