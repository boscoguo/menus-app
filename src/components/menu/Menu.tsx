import React, { useContext, useState } from "react";
import { Tree } from 'antd';
import { Link } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { filterMenuTitle, addTreeNode } from "../../utils/MenuTitleUtils";
import { AppContext } from "../../context/contextManager";
import { useHistory } from 'react-router-dom';
import { replace } from "../../utils/urlUtils";
import menuData from "../../data/menuLists.json";

import "./menu.scss";

const Menu = () => {
  let history = useHistory();
  const { setUrlPathName } = useContext(AppContext);
  const [menu, setMenu] = useState(menuData)

  const renderTitle = (nodeData: any) => {
    const { isBtnTitle, title } = filterMenuTitle(nodeData)
    return (
      <>
        {isBtnTitle ? <Link to={`/${replace(title, " ", "-")}`} >
          <button className="menu__tree__btn" >{title}</button>
        </Link> : <p className="menu__tree__dir">{title}</p>}
      </>
    )
  }

  const handleOnSelect = (keys: React.Key[], info: any) => {
    const { node } = info;
    const { title, key, ifAdd } = node;
    setUrlPathName(title);
    setMenu([...addTreeNode(menuData, key, ifAdd)]);
    if (ifAdd) {
      history.push("/");
    }
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
          treeData={menu}
          titleRender={(nodeData) => renderTitle(nodeData)}
          onSelect={handleOnSelect}
        />
      </div>
    </div>
  );
}

export default Menu;

