import { act, fireEvent, render, screen } from "@testing-library/react";
import AppWrapper from "./AppWrapper";
import { isAuthenticated } from "./services/auth";

jest.mock("./services/auth");
jest.mock("./App", () => ({
  __esModule: true,
  default: () => <div>app-screen</div>,
}));
jest.mock("./pages/Login", () => ({
  Login: ({ onLogin }: { onLogin: () => void }) => (
    <button onClick={onLogin}>login-screen</button>
  ),
}));

const mockIsAuthenticated = isAuthenticated as jest.MockedFunction<typeof isAuthenticated>;

describe("AppWrapper", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("shows the login screen for unauthenticated users", () => {
    mockIsAuthenticated.mockReturnValue(false);

    render(<AppWrapper />);

    expect(screen.getByRole("button", { name: "login-screen" })).toBeInTheDocument();
  });

  it("shows a loader before rendering the app after login", () => {
    mockIsAuthenticated.mockReturnValue(false);

    render(<AppWrapper />);
    fireEvent.click(screen.getByRole("button", { name: "login-screen" }));

    expect(screen.getByText("Loading dashboard...")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1200);
    });

    expect(screen.getByText("app-screen")).toBeInTheDocument();
  });

  it("renders the app immediately for authenticated users", () => {
    mockIsAuthenticated.mockReturnValue(true);

    render(<AppWrapper />);

    expect(screen.getByText("app-screen")).toBeInTheDocument();
  });
});