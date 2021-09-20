import React, { useContext } from "react";
import { BtnContext } from "../../context/contextManager";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from 'react-router-dom';
import * as Yup from "yup";

import "./login.scss";

const loginSchema = Yup.object().shape({
	password: Yup.string()
		.min(8, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required")
});

const LoginForm = () => {
	const btnValueContext = useContext(BtnContext);
	let history = useHistory();
	const { setBtnValue } = btnValueContext;
	const handleSubmit = (values: any, { setSubmitting }: any) => {
		setTimeout(() => {
			console.log(JSON.stringify(values, null, 2));
			fetch('https://login.free.beeceptor.com/login', {
				method: 'post',
				body: JSON.stringify(values, null, 2)
			}).then((response) => {
				return response.text();
			}).then((text) => {
				console.log(text)
			}).catch(error => {
				console.error(error);
			})
			setSubmitting(false);
		}, 400);
	};

	const handleCancelBtn = () => {
		history.push("/");
		setBtnValue("/");
	}

	return (
		<div className="login">
			<h1>Login</h1>
			<Formik
				initialValues={{ email: "", password: "" }}
				validationSchema={loginSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => {
					return (
						<div className="login__form"><Form>
							<div className="login__form__email">
								<label>
									<p className="login__form__email-title">Email:</p>
									<div className="login__form__email-input">
										<Field type="email" name="email" id="email" />
									</div>
									<div className="login__form-error" data-testid="login-form-error">
										<ErrorMessage name="email" component="div" data-testid="email-error" />
									</div>
								</label>
							</div>
							<div className="login__form__pw">
								<label>
									<p className="login__form__pw-title">Password:</p>
									<div className="login__form__pw-input">
										<Field type="password" name="password" id="password" />
									</div>
									<div className="login__form-error">
										<ErrorMessage name="password" component="div" data-testid="password-error" />
									</div>
								</label>
							</div>
							<div className="login__form__btn-submit">
								<button type="submit" disabled={isSubmitting}>
									Submit
								</button>
							</div>
						</Form>
							<div className="login__form__btn-cancel">
								<button onClick={handleCancelBtn}>
									Cancel
								</button>
							</div>

						</div>
					);
				}}
			</Formik>
		</div>
	);
}

export default LoginForm;