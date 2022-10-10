// import
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Location from './Components/location'
import Profile from './Components/profile'
import Login from './Components/login'
import Signup from './Components/signup'
import Map from './Components/Partials/map'
import Where from './Components/where'

// create classes
class App extends React.Component {
	state = {
		location: 'Koh Phangan'
	}

	// make this pass a 2nd variable as the state key name?
	setLocation = async (ev) => {
		await this.setState({
			location: ev.target.value
		})
		console.log(this.state.location)
	}

  render() {
    return (
		<BrowserRouter>
      <Switch>
        <Route path='/signup' component={Signup} />
				<Route path='/login' component={Login} />
				<Route path='/profile' component={Profile} />
				<Route path='/location' component={Location} />
				<Route path='/map' component={Map} />
				<Route exact path='/'
       		render={(routerProps) => {
        		return (
        			<Where
					 			location={this.state.location}
								handleChange={this.setLocation}
								routerProps={routerProps}
							/>
         		)
       		}}
				/>
      </Switch>
    </BrowserRouter>
		)
  }
}

// export
export default App
