import { fireEvent, render, screen } from "@testing-library/react";
import { MainLayout } from "./MainLayout";
import { logout } from "../services/auth";

jest.mock("../services/auth");

const mockLogout = logout as jest.MockedFunction<typeof logout>;

describe("MainLayout", () => {
  const originalLocation = window.location;

  beforeEach(() => {
    jest.clearAllMocks();

    Object.defineProperty(window, "location", {
      configurable: true,
      value: {
        ...originalLocation,
        reload: jest.fn(),
      },
    });
  });

  afterEach(() => {
    Object.defineProperty(window, "location", {
      configurable: true,
      value: originalLocation,
    });
  });

  it("renders the layout shell and children", () => {
    render(
      <MainLayout>
        <div>dashboard-content</div>
      </MainLayout>
    );

    expect(screen.getByText("Trading Dashboard")).toBeInTheDocument();
    expect(screen.getByText("dashboard-content")).toBeInTheDocument();
  });

  it("logs out and reloads the page", () => {
    render(
      <MainLayout>
        <div>dashboard-content</div>
      </MainLayout>
    );

    fireEvent.click(screen.getByRole("button", { name: "Logout" }));

    expect(mockLogout).toHaveBeenCalled();
    expect(window.location.reload).toHaveBeenCalled();
  });
});