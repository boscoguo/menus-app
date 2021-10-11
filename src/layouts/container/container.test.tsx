import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "../../context/provider/Provider";
import Container from "./Container";
import userEvent from "@testing-library/user-event";

describe("<Container />", () => {
  it("should render correct class when login", async () => {
    render(
      <Provider>
        <Router>
          <Container />
        </Router>
      </Provider>
    );
    const leftPanel = screen.getByTestId("left-panel");
    const rightPanel = screen.getByTestId("right-panel");
    const loginBtn = await screen.findByRole("button", { name: "login" });
    expect(leftPanel).toBeInTheDocument;
    expect(rightPanel).toBeInTheDocument;
    expect(loginBtn).toBeInTheDocument;
  });

  it("should be displayed different classes on left and right panel when clicking login button", async () => {
    render(
      <Provider>
        <Router>
          <Container />
        </Router>
      </Provider>
    );
    const leftPanel = screen.getByTestId("left-panel");
    const rightPanel = screen.getByTestId("right-panel");
    const loginBtn = await screen.findByRole("button", { name: "login" });
    userEvent.click(loginBtn);
    expect(leftPanel).toHaveClass("close");
    expect(rightPanel).toHaveClass("full-screen");
    expect(window.location.href).toEqual("http://localhost/login");
  });

  it("should show the left menu by changing class names on left and right panels when clicking cancel button", async () => {
    render(
      <Provider>
        <Router>
          <Container />
        </Router>
      </Provider>
    );
    const leftPanel = screen.getByTestId("left-panel");
    const rightPanel = screen.getByTestId("right-panel");
    const loginBtn = await screen.findByRole("button", { name: "login" });
    expect(loginBtn).toBeInTheDocument;
    const cancelBtn = screen.getByRole("button", { name: /cancel/i });
    if (window.location.href === "http://localhost/login/") {
      userEvent.click(cancelBtn);
      expect(leftPanel).toHaveClass("left");
      expect(rightPanel).toHaveClass("right");
      expect(window.location.href).toEqual("http://localhost");
    }
  });
});
