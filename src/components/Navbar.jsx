import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";

import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import logo from "../images/cryptocurrency.png";

const Navbar = () => {
  const items = [
    // {
    //   label: 'Home',
    //   key: 'home',
    //   icon: <HomeOutlined />,
    // },
    // {
    //   label: 'Cryptocurrencies',
    //   key: 'cryptocurrencies',
    //   icon: <FundOutlined />,
    // },
    {
      label: <Link to="/">Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
        label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
        key: "cryptocurrencies",
        icon: <FundOutlined />,
    },
    {
        label: <Link to="/exchanges">Exchanges</Link>,
        key: "exchanges",
        icon: <MoneyCollectOutlined />,
    },
    {
        label: <Link to="/news">News</Link>,
        key: "news",
        icon: <BulbOutlined />,
    },
  ];

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={logo} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>

      {/* <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu> */}

      <Menu theme="dark" items={items} />
    </div>
  );
};

export default Navbar;
