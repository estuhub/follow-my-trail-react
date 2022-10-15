// import
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Location from './Components/location'
import Profile from './Components/profile'
import Login from './Components/login'
import Signup from './Components/signup'
import Map from './Components/Partials/map'
import Where from './Components/where'
import Create from './Components/create'
import Trip from './Components/trip'
import Discover from './Components/discover'

// import AutoComplete from './Components/Partials/autocomplete'

// create classes
class App extends React.Component {
	state = {
		location: 'Koh Phangan',
		user: {
			name: 'Ise',
			id: '633d29b6e4273dea88bda749',
			trips: ['Koh Phangan', 'Koh Tao']
		}
	}

	// make this pass a 2nd variable as the state key name?
	setLocation = async (ev) => {
		await this.setState({
			location: ev.target.value
		})
		console.log(this.state.location)
	}

	setUser = async (obj) => {
		await this.setState({
			user: obj
		})
		console.log(this.state.user)
	}

  render() {
    return (
		<BrowserRouter>
      <Switch>
        <Route path='/signup' component={Signup} />
				<Route path='/login' component={Login} />
				<Route path='/create' component={Create} />
				<Route path='/map' component={Map} />
				<Route exact path='/trip'
					render={(routerProps) => {
						return (
							<Trip
								location={this.state.location}
								user={this.state.user}
								handleChange={this.setLocation}
								routerProps={routerProps}
							/>
						)
					}}
				/>
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
				<Route exact path='/location'
					render={(routerProps) => {
						return (
							<Location
								location={this.state.location}
								user={this.state.user}
								routerProps={routerProps}
							/>
						)
					}}
				/>
				<Route exact path='/profile'
					render={(routerProps) => {
						return (
							<Profile
								user={this.state.user}
								handleChange={this.setUser}
							/>
						)
					}}
				/>
				<Route exact path='/discover'
					render={(routerProps) => {
						return (
							<Discover
								location={this.state.location}
								user={this.state.user}
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
