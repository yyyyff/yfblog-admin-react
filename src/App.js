import React, { Suspense } from "react"
import PropTypes from "prop-types"
import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router-dom"
import AuthRouter from "@/router/protected"
import Login from "@/views/Login"
import Home from "@/views/Home"
import Loading from "@/components/Loading"
import NotFound from "@/views/404"

function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <AuthRouter path="/" component={Home} />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object
}

export default App
