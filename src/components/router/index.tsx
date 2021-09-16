import React from "react";
import LoginForm from "../login";
import CommonNode from "../commonNode";
import { Switch, Route } from "react-router-dom";
import { replace } from "../../utils/urlUtils";

const RouterAll = () => {
    const pathName = window.location.pathname
    return (
        < Switch >
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/Button-1">
                <CommonNode data={replace(pathName, "/", "")} />
            </Route>
            <Route exact path="/Button-3">
                <CommonNode data={replace(pathName, "/", "")} />
            </Route>
        </Switch >
    )
}

export default RouterAll;