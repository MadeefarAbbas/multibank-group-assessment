import { fireEvent, render, screen } from "@testing-library/react";
import { Login } from "./Login";
import { login } from "../services/auth";

jest.mock("../services/auth");

const mockLogin = login as jest.MockedFunction<typeof login>;

describe("Login", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("prefills admin credentials and logs in successfully", () => {
    const onLogin = jest.fn();
    mockLogin.mockReturnValue(true);

    render(<Login onLogin={onLogin} />);

    expect(screen.getByLabelText("Username")).toHaveValue("admin");
    expect(screen.getByLabelText("Password")).toHaveValue("admin");

    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(mockLogin).toHaveBeenCalledWith("admin", "admin");
    expect(onLogin).toHaveBeenCalled();
  });

  it("shows an alert for invalid credentials", () => {
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => undefined);
    mockLogin.mockReturnValue(false);

    render(<Login onLogin={jest.fn()} />);

    fireEvent.change(screen.getByLabelText("Username"), { target: { value: "user" } });
    fireEvent.change(screen.getByLabelText("Password"), { target: { value: "wrong" } });
    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(mockLogin).toHaveBeenCalledWith("user", "wrong");
    expect(alertSpy).toHaveBeenCalledWith("Invalid credentials (use admin/admin)");

    alertSpy.mockRestore();
  });
});