import React from "react"
import { Menu, Icon, Dropdown, Avatar } from "antd"
import "./HeaderUser.less"

//TODO menuClick currentUser
const HeaderUser = ({ menuClick, currentUser }) => {
  const menu = (
    <Menu className="menu">
      <Menu.Item key="setting">
        <Icon type="setting" />
        <span>设置</span>
      </Menu.Item>
      <Menu.Item key="logout">
        <Icon type="logout" />
        <span>登出</span>
      </Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a className="ant-dropdown-link" href="#">
        <Avatar size="small" icon="user" />
        <span style={{ maring: "0 8px" }}>msputup</span>
      </a>
    </Dropdown>
  )
}

export default HeaderUser
