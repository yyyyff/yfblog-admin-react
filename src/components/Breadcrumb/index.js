import React from "react"
import { Breadcrumb } from "antd"
import { withRouter, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "./Bread.less"

const Bread = props => {
  const router = useSelector(state => state.router)
  const state = router.location.state && router.location.state.filter(i=>i)
  console.log(state)
  return (
    <Breadcrumb className="bread">
      <Breadcrumb.Item>
        <Link to="/dashboard">控制台</Link>
      </Breadcrumb.Item>

      {state && state.map((name, index) => (
        <Breadcrumb.Item key={index}>
          <Link to="/dashboard">{name}</Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}

export default Bread
