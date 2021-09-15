import React from "react";
import LoginForm from "../login";
import { Switch, Route } from "react-router-dom";

const RouterAll = () => {
    return (
        < Switch >
            <Route exact path="/login" component={LoginForm} />
        </Switch >
    )
}

export default RouterAll;