import React, { useContext } from "react";
import { AppContext } from "../../context/contextManager";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from 'react-router-dom';
import { httpPost } from "../../utils/httpUtils";
import { LOGIN_BASE_URL } from "../../config/base";
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
	const btnValueContext = useContext(AppContext);
	let history = useHistory();
	const { setUrlPathName } = btnValueContext;
	
	const handleSubmit = async (values: any, { setSubmitting }: any) => {
		const result = await httpPost(LOGIN_BASE_URL, values);
		console.log("result", result);
		setSubmitting(false);
	};

	const handleCancelBtn = () => {
		history.push("/");
		setUrlPathName("/");
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