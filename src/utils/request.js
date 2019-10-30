import axios from "axios"
import { createBrowserHistory } from "history"

import { message } from "antd"
import { get, remove } from "./storage"
import { API_ROOT } from "@/config"

const instance = axios.create({
  baseURL: API_ROOT
})

function checkStatus({ response }) {
  if (!response) {
    throw new Error("没有响应")
  }
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  // if (response.status === 401) {
  //   remove("token")
  //   const history = createBrowserHistory()
  //   history.push('/admin')
  // }
  const errorText = response.data.msg || "未知错误"
  const error = new Error(errorText)
  throw error
}

instance.interceptors.request.use(
  config => {
    const token = get("token")
    if (token) {
      config.headers["AUTHORIZATION"] = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return checkStatus(error)
  }
)

export default function request(options) {
  return new Promise((resolve, reject) => {
    instance(options)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        message.error(error.message)
      })
    // reject(error)
  })
}
