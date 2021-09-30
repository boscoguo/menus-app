import React from "react";
import { LoginPage, CommonPage } from "../pages";
import { Switch, Route } from "react-router-dom";

const RouterComponent = () => {
	return (
		<Switch>
			<Route exact path="/login" component={LoginPage} />
			<Route path="/Button-1" component={CommonPage} />
			<Route path="/Button-3" component={CommonPage} />
		</Switch>
	)
}

export default RouterComponent;