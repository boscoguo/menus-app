import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "../../context/provider/Provider";
import Menu from "./Menu"
import userEvent from "@testing-library/user-event";

describe("<Menu />", () => {
	it("shoud display all nodes on page when page loading", async () => {
		render(
			<Provider>
				<Router>
					<Menu />
				</Router>
			</Provider>)
		const nodes = await screen.findAllByText(/parent/i);
		expect(nodes).toHaveLength(2);

		const btns = await screen.findAllByRole("button");
		expect(btns).toHaveLength(5);
	})

	it("should make the url changed when clicking show page buttons", async () => {
		render(
			<Provider>
				<Router>
					<Menu />
				</Router>
			</Provider>)
		const routerBtnOne = await screen.findByRole("button", { name: "Button 1" });
		userEvent.click(routerBtnOne);
		expect(window.location.href).toEqual("http://localhost/Button-1");

		const routerBtnThree = await screen.findByRole("button", { name: "Button 3" });
		userEvent.click(routerBtnThree);
		expect(window.location.href).toEqual("http://localhost/Button-3");
	})

	it("should add new nested button on the menu when add node buttons are clicking", async () => {
		render(
			<Provider>
				<Router>
					<Menu />
				</Router>
			</Provider>)
		const addNodeBtns = await screen.findAllByRole("button", { name: "Add node" });

		addNodeBtns.map(async (btn) => {
			userEvent.click(btn)
			const newAddBtn = await screen.findAllByRole("button", { name: "new son button" })
			expect(newAddBtn).toBeVisible();
		})
	})

})
