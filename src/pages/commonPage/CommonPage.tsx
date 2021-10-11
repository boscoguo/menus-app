import React from "react";
import { CommonNode } from "../../components";
import { replace } from "../../utils/urlUtils";

const CommonPage = () => {
  const pathName = window.location.pathname;
  return (
    <>
      <CommonNode data={replace(pathName, "/", "")} />
    </>
  );
};

export default CommonPage;
