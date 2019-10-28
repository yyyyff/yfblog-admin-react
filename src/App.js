import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthRouter from '@/router/protected'
import Login from '@/views/Login'
import Home from '@/views/Home'

function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Router>
        <Switch>
          <Route path='/login' exact component={Login} />
          <AuthRouter path="/" component={Home} />
        </Switch>
      </Router>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object
}

export default App
