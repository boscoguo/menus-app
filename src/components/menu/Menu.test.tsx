import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "../provider/Provider";
import Menu from "."
import userEvent from "@testing-library/user-event";


test("<Menu />", async () => {
	render(
		<Provider>
			<Router>
				<Menu />
			</Router>
		</Provider>)

	//whether all nodes have been rendered on page  
	const nodes = await screen.findAllByText(/parent/i);
	expect(nodes).toHaveLength(2);

	const btns = await screen.findAllByRole("button");
	expect(btns).toHaveLength(5);

	// page skip button click
	const routerBtnOne = await screen.findByRole("button", { name: "Button 1" });
	userEvent.click(routerBtnOne);
	expect(window.location.href).toEqual("http://localhost/Button-1");

	const routerBtnThree = await screen.findByRole("button", { name: "Button 3" });
	userEvent.click(routerBtnThree);
	expect(window.location.href).toEqual("http://localhost/Button-3");

	// add node button click 
	const addNodeBtns = await screen.findAllByRole("button", { name: "Add node" });

	addNodeBtns.map(async (btn) => {
		userEvent.click(btn)
		const newAddBtn = await screen.findAllByRole("button", { name: "new son button" })
		expect(newAddBtn).toBeVisible();
	})

})
