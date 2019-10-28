import { get } from './storage'
import JwtDecode from 'jwt-decode'
export const checkLogin = () => {
  let token = get('token')
  if (!token) return false
  const { exp } = JwtDecode(token)
  const nowTime = new Date().getTime()
  if (nowTime > exp * 1000) return false
  return true
}
