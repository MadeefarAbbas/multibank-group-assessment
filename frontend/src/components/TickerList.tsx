export const TickerList = ({ prices, onSelect }: any) => (
  <div>
    {Object.entries(prices).map(([symbol, price]) => (
      <div key={symbol} onClick={() => onSelect(symbol)}>
        {symbol}: {Number(price).toFixed(2)}
      </div>
    ))}
  </div>
);