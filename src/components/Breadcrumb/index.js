import React from "react"
import { Breadcrumb } from "antd"
import { withRouter,Link } from "react-router-dom"
import {useSelector} from 'react-redux'
import "./Bread.less"

const Bread = ({Menus}) => {
  const router = useSelector(state=>state.router)
  console.log(Menus)
  return (
    <Breadcrumb className="bread">
      <Breadcrumb.Item>控制台</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default withRouter(Bread)
