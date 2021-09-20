import React, { ReactChild, ReactChildren, useState } from "react";
import { BtnContext } from "../../context/contextManager";
import { replace } from "../../utils/urlUtils";

interface ProviderProps {
    children: ReactChild | ReactChildren;
}

const Provider = ({ children }: ProviderProps) => {
    const pathName = window.location.pathname;
    const [btnValue, setBtnValue] = useState(replace(pathName, "/", ""));
    return <BtnContext.Provider value={{ btnValue, setBtnValue }}>{children}</BtnContext.Provider>
}

export default Provider;