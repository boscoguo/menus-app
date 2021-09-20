// import React from "react";
import { render, screen } from "@testing-library/react";
import Login from ".";
import Provider from "../provider/Provider";
import userEvent from "@testing-library/user-event";


describe("<Longin />", () => {
	test("email input", () => {
		render(
			<Provider>
				<Login />
			</Provider>
		);
		// email input 
		const emailInput = screen.getByRole("textbox", { name: /email/i });
		expect(emailInput).toBeInTheDocument();

		// null email field check
		userEvent.clear(emailInput);
		expect(emailInput).toHaveValue("");
		async () => {
			const errorMessageNode = await screen.findByText("Required");
			expect(errorMessageNode).toBeInTheDocument();
		};
		// incorrect email check
		userEvent.clear(emailInput);
		userEvent.type(emailInput, "adb");
		expect(emailInput).toHaveValue("adb");
		async () => {
			const errorMessageNode = await screen.findByText("Invalid email");
			expect(errorMessageNode).toBeInTheDocument();
		};
		//email input correct
		userEvent.clear(emailInput);
		userEvent.type(emailInput, "test@163.com");
		expect(emailInput).toHaveValue("test@163.com");
		async () => {
			const errorMessageNode = await screen.findAllByTestId("login-email-error");
			expect(errorMessageNode).not.toBeInTheDocument();
		};

	})

	test("password input", async () => {
		render(
			<Provider>
				<Login />
			</Provider>
		);
		// password input 
		const passwordInput = screen.getByLabelText(/password/i);
		expect(passwordInput).toBeInTheDocument();
		// null password field check
		userEvent.clear(passwordInput);
		expect(passwordInput).toHaveValue("");
		async () => {
			const errorMessageNode = await screen.findByText("Required");
			expect(errorMessageNode).toBeInTheDocument();
		};
		// incorrect password check
		userEvent.clear(passwordInput);
		userEvent.type(passwordInput, "adb");
		expect(passwordInput).toHaveValue("adb");
		async () => {
			const errorMessageNode = await screen.findByText("Too Short!");
			expect(errorMessageNode).toBeInTheDocument();
		};
		//password input correct
		userEvent.clear(passwordInput);
		userEvent.type(passwordInput, "test@163.comjoijoijoijoijoijoijoijoijoijoijoijoijoijoijoijewfjwoiejfoiewjhfoiwejfoiwejfoiu3298yurf89eut489shiuyhui4oejfoiwej");
		async () => {
			const errorMessageNode = await screen.findByText("Too Long!");
			expect(errorMessageNode).toBeInTheDocument();
		};
		//password input correct
		userEvent.clear(passwordInput);
		userEvent.type(passwordInput, "test@163joijoijoij");
		expect(passwordInput).toHaveValue("test@163joijoijoij");
		async () => {
			const errorMessageNode = await screen.findAllByTestId("login-email-error");
			expect(errorMessageNode).not.toBeInTheDocument();
		};
	})

	test('sumit action', async () => {
		render(
			<Provider>
				<Login />
			</Provider>
		);
		const submitBtn = screen.getByRole("button", { name: /submit/i });
		expect(submitBtn).toBeInTheDocument();
		const handleSubmit = jest.fn()
		const emailInput = screen.getByRole("textbox", { name: /email/i });
		const passwordInput = screen.getByLabelText(/password/i);
		userEvent.type(emailInput, 'John@163.com');
		userEvent.type(passwordInput, 'Dee122378');
		userEvent.click(submitBtn);

		async () => {
			await expect(handleSubmit).toHaveBeenLastCalledWith({
				email: "John@163.com",
				password: "Dee12344"
			})
		}
	})
})
