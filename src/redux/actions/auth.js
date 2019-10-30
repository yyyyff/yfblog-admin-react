import { push } from "connected-react-router"
import JwtDecode from 'jwt-decode'
import {save} from "@/utils/storage"
import { login } from "@/api/index"
import * as Types from '../actionTypes'

export const adminLogin = data => {
  return async (dispatch) => {
    const {token} = await login(data)
    if(token){
      save('token',token)
      const { user } = JwtDecode(token)
      const payload = {
        user,token
      }
      dispatch({type:Types.ADMIN_LOGIN,payload})
      dispatch(push('/'))
    }
  }
}
