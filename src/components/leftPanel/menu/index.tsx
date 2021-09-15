import React, { useContext } from "react";
import { Tree } from 'antd';
import { Link } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { renderMenuTitle } from "../../../utils/MenuTitleUtils";
import { BtnContext } from "../../../context/contextManager";

import "./menu.scss";

interface MenuProps {
  data: any
}

const Menu = ({ data }: MenuProps) => {

  const btnValueContext = useContext(BtnContext);
  const { setBtnValue } = btnValueContext;
  const renderTitle = (nodeData: any) => {
    return (
      <>
        {renderMenuTitle(nodeData).flag ? <Link to={`/${renderMenuTitle(nodeData).title.replace(/\ /g, "-")}`} >
          <button className="menu__btn">{renderMenuTitle(nodeData).title}</button>
        </Link> : <p className="menu__dir">{renderMenuTitle(nodeData).title}</p>}
      </>
    )
  }

  const handleOnSelect = (keys: React.Key[], info: any) => {
    setBtnValue(info.node.title);
  }

  return (
    <div className="menu">
      <Tree
        showIcon
        defaultExpandAll
        switcherIcon={<DownOutlined />}
        treeData={data}
        titleRender={(nodeData) => renderTitle(nodeData)}
        onSelect={handleOnSelect}
      />
    </div>
  );
}

export default Menu;

