// import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";
import Provider from "../../context/provider/Provider";
import userEvent from "@testing-library/user-event";


describe("<Longin />", () => {

	it("should display form elements on the page when page loading", () => {
		render(
			<Provider>
				<Login />
			</Provider>
		)
		const emailInput = screen.getByRole("textbox", { name: /email/i });
		expect(emailInput).toBeInTheDocument();
		const passwordInput = screen.getByLabelText(/password/i);
		expect(passwordInput).toBeInTheDocument();
		const submitBtn = screen.getByRole("button", { name: /submit/i });
		expect(submitBtn).toBeInTheDocument();
	})

	it("should have no hints when email and password fields are both correct", () => {
		render(
			<Provider>
				<Login />
			</Provider>
		)
		const emailInput = screen.getByRole("textbox", { name: /email/i });
		const passwordInput = screen.getByLabelText(/password/i);
		userEvent.clear(emailInput);
		userEvent.type(emailInput, "test@163.com");
		expect(emailInput).toHaveValue("test@163.com");
		async () => {
			const errorMessageNode = await screen.findAllByTestId("login-email-error");
			expect(errorMessageNode).not.toBeInTheDocument();
		};

		userEvent.clear(passwordInput);
		userEvent.type(passwordInput, "test@163joijoijoij");
		expect(passwordInput).toHaveValue("test@163joijoijoij");
		async () => {
			const errorMessageNode = await screen.findAllByTestId("login-email-error");
			expect(errorMessageNode).not.toBeInTheDocument();
		};
		
	})

	it("should hint users to fill email and password when these fields are empty", () => {
		render(
			<Provider>
				<Login />
			</Provider>
		)
		const emailInput = screen.getByRole("textbox", { name: /email/i });
		const passwordInput = screen.getByLabelText(/password/i);
		// email field
		userEvent.clear(emailInput);
		expect(emailInput).toHaveValue("");
		async () => {
			const errorMessageNode = await screen.findByText("Required");
			expect(errorMessageNode).toBeInTheDocument();
		};
		// password field
		userEvent.clear(passwordInput);
		expect(passwordInput).toHaveValue("");
		async () => {
			const errorMessageNode = await screen.findByText("Required");
			expect(errorMessageNode).toBeInTheDocument();
		};
	})

	it("should hint users when email format is incorrect", () => {
		render(
			<Provider>
				<Login />
			</Provider>
		)
		const emailInput = screen.getByRole("textbox", { name: /email/i });
		userEvent.clear(emailInput);
		userEvent.type(emailInput, "adb");
		expect(emailInput).toHaveValue("adb");
		async () => {
			const errorMessageNode = await screen.findByText("Invalid email");
			expect(errorMessageNode).toBeInTheDocument();
		};
	})

	it("should hint users when password too long or too short", () => {
		render(
			<Provider>
				<Login />
			</Provider>
		)
		const passwordInput = screen.getByLabelText(/password/i);
		userEvent.clear(passwordInput);
		userEvent.type(passwordInput, "adb");
		expect(passwordInput).toHaveValue("adb");
		async () => {
			const errorMessageNode = await screen.findByText("Too Short!");
			expect(errorMessageNode).toBeInTheDocument();
		};
		userEvent.clear(passwordInput);
		userEvent.type(passwordInput, "test@163.comjoijoijoijoijoijoijoijoijoijoijoijoijoijoijoijewfjwoiejfoiewjhfoiwejfoiwejfoiu3298yurf89eut489shiuyhui4oejfoiwej");
		async () => {
			const errorMessageNode = await screen.findByText("Too Long!");
			expect(errorMessageNode).toBeInTheDocument();
		};
	})

	it('sumit action sucess', async () => {
		render(
			<Provider>
				<Login />
			</Provider>
		);
		const submitBtn = screen.getByRole("button", { name: /submit/i });
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
