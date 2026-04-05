import { render, screen } from "@testing-library/react";
import { ChartContainer } from "./ChartContainer";

describe("ChartContainer", () => {
  it("renders the title and children", () => {
    render(
      <ChartContainer title="BTC-USD">
        <div>chart-content</div>
      </ChartContainer>
    );

    expect(screen.getByText("BTC-USD")).toBeInTheDocument();
    expect(screen.getByText("chart-content")).toBeInTheDocument();
  });
});