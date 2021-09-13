import React, { useEffect, useState, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootStore } from "../../../store/store";
// import EventCard from "./eventCard";
// import { setMovieId, getEventDetails } from "../../../action/eventsAction";
// import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { getRootListKey } from "../../../utils/menuListUtils";
import "./cardsContainer.scss";

const { SubMenu } = Menu;
// const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
// const menuLists = ["login", "test1", "test2", "test3", "test4", "test5"]


interface cardsContainerProps {
  data: any;
}
const CardsContainer = ({ data }: cardsContainerProps) => {
  // console.log("data", data);
  // console.log("test result", getRootListKey(data));
  const menuLists = getRootListKey(data)
  // const eventsState = useSelector(
  //   (state: RootStore) => state.events.event?.data._embedded.events
  // )
  // const pageSize = useSelector(
  //   (state: RootStore) => state.events.event?.data.page.size
  // )

  // const searchLoading = useSelector((state: RootStore) => state.events.loading);
  // const dispatch = useDispatch();

  // const handleClick = (id: string) => {
  //   dispatch(getEventDetails(id));
  // };
  // const setCurrentItemArr = () => {
  //   if (eventsState !== undefined) {
  //     const currentArr = eventsState.map(item => {
  //       const obj = { id: "", isActive: false };
  //       obj.id = item.id;
  //       return obj;
  //     });
  //     return currentArr;
  //   }
  // };

  // const currentItems = setCurrentItemArr();
  // const [card, setCard] = useState(currentItems && [...currentItems]);

  // useEffect(() => {
  //   if (!card && currentItems) {
  //     setCard(currentItems);
  //   }
  // }, [card, currentItems]);

  const [openKeys, setOpenKeys] = useState(['login']);

  const onOpenChange = (keys: any[]) => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (menuLists.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div className="cards">
      <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: "100%" }}>
        <SubMenu key="login" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="1">login</Menu.Item>
        </SubMenu>
        <SubMenu key="test1" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="test2" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="test3" icon={<SettingOutlined />} title="Navigation Four">
          <Menu.Item key="13">Option 13</Menu.Item>
          <Menu.Item key="14">Option 14</Menu.Item>
          <Menu.Item key="15">Option 15</Menu.Item>
          <Menu.Item key="16">Option 16</Menu.Item>
        </SubMenu>
        <SubMenu key="test4" icon={<SettingOutlined />} title="Navigation Five">
          <Menu.Item key="17">Option 17</Menu.Item>
          <Menu.Item key="18">Option 18</Menu.Item>
          <Menu.Item key="19">Option 19</Menu.Item>
          <Menu.Item key="20">Option 20</Menu.Item>
        </SubMenu>

      </Menu>

      {/* <div className="cards__title">
        <h4 className="cards__title-text">Events</h4>
        <h4 className="cards__title-num">{pageSize}</h4>
      </div>
      {eventsState
        ? eventsState.map((item, index) => {
          const { name, id, dates, _embedded } = item;
          const { venues } = _embedded;
          const { start } = dates;
          const { localDate } = start;
          return (
            <Link to={`/${id}`} key={index}>
              <div onClick={() => handleClick(id)}
              >
                <EventCard
                  name={name}
                  localDate={localDate}
                  venues={venues[0].name}
                  id={id}
                  index={index}
                  card={card}
                />
              </div>
            </Link>
          );
        })
        : searchLoading
          ? "Loading..."
          : "no results"} */}
    </div>
  );
};

export default CardsContainer;
