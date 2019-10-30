import request from "@/utils/request"

export const login = (data = {}) =>
  request({
    method: "post",
    url: "/user/login",
    data
  })
