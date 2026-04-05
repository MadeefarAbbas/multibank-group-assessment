export const login = (username: string, password: string) => {
  if (username === "admin" && password === "admin") {
    const token = "mock-token";

    // Save login state
    localStorage.setItem("token", token);

    return true;
  }

  return false;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};