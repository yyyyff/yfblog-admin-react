import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { checkLogin } from '@/utils/checkLogin'

const Protected = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkLogin() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
)

export default Protected
