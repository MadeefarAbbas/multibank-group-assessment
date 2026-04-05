import { Card, CardContent, Typography, Grid } from "@mui/material";

type Props = {
  prices: Record<string, number>;
  onSelect: (symbol: string) => void;
  selected: string;
};

export const TickerList = ({ prices, onSelect, selected }: Props) => {
  return (
    <Grid container spacing={{ xs: 1.5, sm: 2 }}>
      {Object.entries(prices).map(([symbol, price]) => (
        <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={symbol}>
          <Card
            onClick={() => onSelect(symbol)}
            sx={{
              cursor: "pointer",
              backgroundColor: selected === symbol ? "primary.main" : "background.paper",
              color: selected === symbol ? "primary.contrastText" : "text.primary",
              border: selected === symbol ? 2 : 1,
              borderColor: selected === symbol ? "primary.dark" : "divider",
              borderRadius: 3,
              minHeight: "100%",
              transition: "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: 4,
              },
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 2.5 } }}>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", sm: "1.125rem" }, wordBreak: "break-word" }}
              >
                {symbol}
              </Typography>
              <Typography
                color={selected === symbol ? "inherit" : "primary"}
                sx={{ fontSize: { xs: "1rem", sm: "1.125rem" }, mt: 0.5 }}
              >
                {price.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};