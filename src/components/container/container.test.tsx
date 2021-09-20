import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "../provider/Provider";
import Container from ".";
import userEvent from "@testing-library/user-event";

describe("<Container />", () => {
	it('should render correct class when login', async () => {
		render(<Provider><Router><Container /></Router></Provider>)
		const leftPanel = screen.getByTestId("left-panel");
		const rightPanel = screen.getByTestId("right-panel");
		const loginBtn = await screen.findByRole("button", { name: "login" });
		
		// login button click
		userEvent.click(loginBtn);
		expect(leftPanel).toHaveClass("close");
		expect(rightPanel).toHaveClass("full-screen");
		expect(window.location.href).toEqual("http://localhost/login");
		
		// cancel button click
		if(window.location.href === "http://localhost/login/") {
			const cancelBtn = screen.getByRole("button", {name: /cancel/i})
			userEvent.click(cancelBtn);
			expect(leftPanel).toHaveClass("left");
			expect(rightPanel).toHaveClass("right");
			expect(window.location.href).toEqual("http://localhost");
		}
	})
})