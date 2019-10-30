import React, { useState, useEffect } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import {useDispatch,useSelector } from 'react-redux'
import {adminLogin} from '../../redux/actions/auth'
import './index.less'

function Login({ form }) {
  const dispatch = useDispatch()
  const { getFieldDecorator } = form

  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields(async (err, values) => {
      if (!err) {
        dispatch(adminLogin(values))
      }
    })
    setTimeout(() => {
      form.resetFields()
    }, 1500);
  }

  return (
    <div className="container">
      <div className="loginBox">
        <Form onSubmit={handleSubmit} className="login-form">
          <span className="title">博客后台管理</span>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入你的用户名' }]
            })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25' }} />} placeholder="用户名" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入你的密码!' }]
            })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25' }} />} type="password" placeholder="密码" />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Form.create()(Login)
