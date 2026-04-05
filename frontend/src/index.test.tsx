describe("index", () => {
  beforeEach(() => {
    jest.resetModules();
    document.body.innerHTML = '<div id="root"></div>';
  });

  it("mounts the app and starts web vitals reporting", () => {
    const mockRender = jest.fn();
    const mockCreateRoot = jest.fn(() => ({ render: mockRender }));
    const mockReportWebVitals = jest.fn();

    jest.doMock("react-dom/client", () => ({
      __esModule: true,
      createRoot: mockCreateRoot,
      default: {
        createRoot: mockCreateRoot,
      },
    }));
    jest.doMock("./AppWrapper", () => ({
      __esModule: true,
      default: () => null,
    }));
    jest.doMock("./reportWebVitals", () => ({
      __esModule: true,
      default: mockReportWebVitals,
    }));

    jest.isolateModules(() => {
      require("./index");
    });

    expect(mockCreateRoot).toHaveBeenCalledWith(document.getElementById("root"));
    expect(mockRender).toHaveBeenCalled();
    expect(mockReportWebVitals).toHaveBeenCalled();
  });
});