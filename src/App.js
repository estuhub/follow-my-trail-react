// import
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Location from './Components/location'
import Profile from './Components/profile'
import Login from './Components/login'
import Signup from './Components/signup'
import Map from './Components/Partials/map'
import AutoComplete from './Components/Partials/autocomplete'

// create classes
class App extends React.Component {
  render() {
    return (
		<BrowserRouter>
      <Switch>
        <Route path='/signup' component={Signup} />
				<Route path='/login' component={Login} />
				<Route path='/profile' component={Profile} />
				<Route path='/autocomplete' component={AutoComplete} />
				<Route path='/map' component={Map} />
				<Route path='/' component={Location} />

      </Switch>
    </BrowserRouter>
		)
  }
}

// export
export default App
