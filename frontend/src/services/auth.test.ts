import { isAuthenticated, login, logout } from "./auth";

describe("auth service", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("stores a token for valid admin credentials", () => {
    expect(login("admin", "admin")).toBe(true);
    expect(localStorage.getItem("token")).toBe("mock-token");
    expect(isAuthenticated()).toBe(true);
  });

  it("rejects invalid credentials", () => {
    expect(login("user", "wrong")).toBe(false);
    expect(localStorage.getItem("token")).toBeNull();
  });

  it("removes the token on logout", () => {
    localStorage.setItem("token", "mock-token");

    logout();

    expect(localStorage.getItem("token")).toBeNull();
    expect(isAuthenticated()).toBe(false);
  });
});