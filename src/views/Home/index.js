import React, { useState } from "react"
import { Layout,  Icon } from "antd"
import HeaderUser from "@/components/HeaderUser"
import BaseMenu from "@/components/BaseMenu"
import Breadcrumb from '@/components/Breadcrumb'
import HomeRouter from '@/router/homeRouter'
import { Menus } from "@/router/config"
import "./index.less"

const { Header, Sider, Content } = Layout
function Home() {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout className="index">
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <BaseMenu Menus={Menus} collapsed={collapsed} />
      </Sider>
      <Layout>
        <Header className="header">
          <Icon
            className="trigger"
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={toggle}
          />
          <HeaderUser />
        </Header>
        <Breadcrumb Menus={Menus} />
        <Content
          style={{
            margin: "15px 15px",
            padding: 10,
            background: "#fff",
            minHeight: 280,
            borderRadius: '5px'
          }}
        >
          <HomeRouter Menus={Menus} />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home
