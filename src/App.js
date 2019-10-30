import React from "react"
import PropTypes from "prop-types"
import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router-dom"
import AuthRouter from "@/router/protected"
import Login from "@/views/Login"
import Home from "@/views/Home"

function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route path="/login" exact component={Login} />
          <AuthRouter path="/" component={Home} />
        </Switch>
      </>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object
}

export default App
