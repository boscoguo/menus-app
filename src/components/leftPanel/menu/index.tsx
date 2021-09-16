import React, { useContext, useState } from "react";
import { Tree } from 'antd';
import { Link } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { filterMenuTitle, addTreeNode } from "../../../utils/MenuTitleUtils";
import { BtnContext } from "../../../context/contextManager";

import "./menu.scss";

interface MenuProps {
  data: any
}

const Menu = ({ data }: MenuProps) => {

  const btnValueContext = useContext(BtnContext);
  const { setBtnValue } = btnValueContext;
  const renderTitle = (nodeData: any) => {
    const { isBtnTitle, title } = filterMenuTitle(nodeData)
    return (
      <>
        {isBtnTitle ? <Link to={`/${title.replace(/\ /g, "-")}`} >
          <button className="menu__tree__btn">{title}</button>
        </Link> : <p className="menu__tree__dir">{title}</p>}
      </>
    )
  }

  const handleOnSelect = (keys: React.Key[], info: any) => {
    const { node } = info;
    const { title, key, ifAdd } = node;
    setBtnValue(title);
    addTreeNode(data, key, ifAdd)
  }

  return (
    <div className="menu">
      <div className="menu__head">
        <h2>Menu</h2>
      </div>
      <div className="menu__tree">
        <Tree
          showIcon
          defaultExpandAll
          switcherIcon={<DownOutlined />}
          treeData={[...data]}
          titleRender={(nodeData) => renderTitle(nodeData)}
          onSelect={handleOnSelect}
        />
      </div>
    </div>
  );
}

export default Menu;

