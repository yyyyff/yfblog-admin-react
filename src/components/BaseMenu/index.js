import React from "react"
import { Menu, Icon, Button } from "antd"
import { Link } from "react-router-dom"
import {useSelector} from 'react-redux'
const { SubMenu } = Menu

const BaseMenu = ({ Menus, collapsed }) => {
  const router = useSelector(state=>state.router)
  const getSelectKey = () => {
    if(router.location.pathname === '/' || router.location.pathname === '/dashboard'){
      return '/dashboard'
    }else{
      return router.location.pathname
    }
  }
  const getSubKey = () =>{
    let patt = /\/[A-Za-z]+/
    if(patt.test(router.location.pathname)){
      return router.location.pathname.match(patt)[0]
    }else{
      return null
    }
  }
  const renderMenu = menu => (
    <Menu.Item key={menu.path}>
      <Link to={{pathname:menu.path,state:menu.title}}>
        <Icon type={menu.icon} />
        <span>{menu.title}</span>
      </Link>
    </Menu.Item>
  )

  const renderSubMenu = menu => (
    <SubMenu
      key={menu.path}
      title={
        <span>
          <Icon type={menu.icon} />
          <span>{menu.title}</span>
        </span>
      }
    >
      {menu.subMenu.map(item =>
        item.subMenu ? renderSubMenu(item) : renderMenu(item)
      )}
    </SubMenu>
  )
  return (
    <Menu
      defaultSelectedKeys={[getSelectKey()]}
      defaultOpenKeys={[getSubKey()]}
      mode="inline"
      theme="light"
      collapsed={collapsed.toString()}
    >
      {Menus.map(menu =>
        menu.subMenu ? renderSubMenu(menu) : renderMenu(menu)
      )}
      {/* <Menu.Item key="1">
        <Icon type="pie-chart" />
        <span>Option 1</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="desktop" />
        <span>Option 2</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="inbox" />
        <span>Option 3</span>
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="mail" />
            <span>Navigation One</span>
          </span>
        }
      >
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="appstore" />
            <span>Navigation Two</span>
          </span>
        }
      >
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </SubMenu> */}
    </Menu>
  )
}

export default BaseMenu
