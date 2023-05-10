import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Main from './views/main'
import Signin from './views/signin'
import Appointments from './views/appointments'
import Messenger from './views/messenger'
import Settings from './views/settings'
import Login from './views/login'
import Mood from './views/mood'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Main} exact path="/main" />
        <Route component={Signin} exact path="/signin" />
        <Route component={Appointments} exact path="/appointments" />
        <Route component={Messenger} exact path="/messenger" />
        <Route component={Settings} exact path="/settings" />
        <Route component={Login} exact path="/" />
        <Route component={Mood} exact path="/mood" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
