import * as Types from '../actionTypes'
const initialState = {
  token: null,
  user: null
}

const auth = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case Types.ADMIN_LOGIN:
      const { token } = payload
      return { ...state, token, user }
    case Types.ADMIN_LOGOUT:
      return { ...state, token: null, user: null }
    default:
      return state
  }
}

export default auth