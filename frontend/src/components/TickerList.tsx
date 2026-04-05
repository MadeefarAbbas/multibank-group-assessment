import { Card, CardContent, Typography, Grid } from "@mui/material";

type Props = {
  prices: Record<string, number>;
  onSelect: (symbol: string) => void;
  selected: string;
};

export const TickerList = ({ prices, onSelect, selected }: Props) => {
  return (
    <Grid container spacing={2}>
      {Object.entries(prices).map(([symbol, price]) => (
        <Grid size={{ xs: 12, sm: 4 }} key={symbol}>
          <Card
            onClick={() => onSelect(symbol)}
            sx={{
              cursor: "pointer",
              backgroundColor: selected === symbol ? "primary.main" : "background.paper",
              color: selected === symbol ? "primary.contrastText" : "text.primary",
              border: selected === symbol ? 2 : 1,
              borderColor: selected === symbol ? "primary.dark" : "divider",
            }}
          >
            <CardContent>
              <Typography variant="h6">{symbol}</Typography>
              <Typography color={selected === symbol ? "inherit" : "primary"}>
                {price.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};