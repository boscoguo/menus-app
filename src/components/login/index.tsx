import React, { useState, useContext } from "react";
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
    const { setIsCancel, isCancel } = btnValueContext;
    const handleSubmit = (values: any, { setSubmitting }: any) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    const handleCancelBtn = () => {
        history.push("/");
        setIsCancel(true);
    }

    return (
        <div className={isCancel ? "login" : "login"}>
            <h1>Login</h1>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => {
                    return (
                        <div className="login__form">
                            <Form>
                                <div className="login__form__email">
                                    <label>
                                        <p className="login__form__email-title">Email:</p>
                                        <div className="login__email-input">
                                            <Field type="email" name="email" />
                                        </div>
                                        <ErrorMessage name="email" component="div" />
                                    </label>
                                </div>
                                <div className="login__form__pw">
                                    <label>
                                        <p className="login__form__pw-title">Password:</p>
                                        <div className="login__form__pw-input">
                                            <Field type="password" name="password" />
                                        </div>
                                        <ErrorMessage name="password" component="div" />
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