import React from "react";
import { Menu } from 'antd';

interface SingleItemProps {
    singleItemData: any;
}
const SingleItem = ({ singleItemData }: SingleItemProps) => {
    return (
        <div>
            {singleItemData.map((item:string, index: number) => (
                <Menu.Item key={index}>{item}</Menu.Item>
            ))}
        </div>
    )
}

export default SingleItem;