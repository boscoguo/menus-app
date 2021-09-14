import React from "react";
import { Tree } from 'antd';
import { Link } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { renderMenuTitle } from "../../../utils/MenuTitleUtils";

interface MenuProps {
  data: any
}

const Menu = ({ data }: MenuProps) => {

  const renderTitle = (nodeData: any) => {
    return (
      <>
        {renderMenuTitle(nodeData).flag ? <Link to={`/${renderMenuTitle(nodeData).title.replace(/\ /g, "-")}`} >
          <p style={{marginBottom: "0", padding:"0 15px 8px"}}>{renderMenuTitle(nodeData).title}</p>
        </Link> : <p style={{marginBottom: "0", padding:"0 15px 8px"}}>{renderMenuTitle(nodeData).title}</p>}
      </>
    )
  }

  return (
    <Tree
      showIcon
      defaultExpandAll
      blockNode
      switcherIcon={<DownOutlined />}
      treeData={data}
      titleRender={(nodeData) => renderTitle(nodeData)}
    />
  );
}

export default Menu;

