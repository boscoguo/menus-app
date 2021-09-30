import React, { ReactChild, ReactChildren, useState } from "react";
import { AppContext } from "../contextManager";
import { replace } from "../../utils/urlUtils";

interface ProviderProps {
	children: ReactChild | ReactChildren;
}

const Provider = ({ children }: ProviderProps) => {
	const pathName = window.location.pathname;
	const [urlPathName, setUrlPathName] = useState(replace(pathName, "/", ""));
	return <AppContext.Provider value={{ urlPathName, setUrlPathName }}>{children}</AppContext.Provider>
}

export default Provider;