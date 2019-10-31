import React from "react"
import { Spin } from "antd"
import "./loading.less"
const Loading = () => (
  <div className="Loading">
    <Spin tip="加载中..." />
  </div>
)

export default Loading
