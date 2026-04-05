type Props = {
  prices: Record<string, number>;
  onSelect: (s: string) => void;
};

export const TickerList = ({ prices, onSelect }: Props) => (
  <div style={{ display: "flex", gap: 10 }}>
    {Object.entries(prices).map(([symbol, price]) => (
      <div
        key={symbol}
        onClick={() => onSelect(symbol)}
        style={{ cursor: "pointer" }}
      >
        {symbol}: {price.toFixed(2)}
      </div>
    ))}
  </div>
);