import React from 'react'
import axios from 'axios'
import { Redirect } from "react-router-dom"

class Nav extends React.Component {
	state = {
		loggedIn: true
	}
	logout = async () => {
		console.log(this.state.loggedIn)
		let logout = await axios.get(process.env.REACT_APP_SERVER_URL + '/auth/logout')
		console.log()
		this.setState({
			loggedIn: logout.data
		})
		console.log(this.state.loggedIn)
		// change loggedIn state
		// should I redirect here?
		// change the component to be just 'auth' as well orr?
		// do I want the loggedIn state on the App, then props/method to other components?
	}
  render() {
    return (
			<>
			<nav className="container p-2 mb-4">
				<div className="row">
					<div className="col">
						<a href="/houses"
							><img className="logo" src="./logo192.png" alt="somelogo"
						/></a>
					</div>
					<div className="col text-end">
						<a href="/profile" className="btn btn-outline-secondary">
							<img
								className="me-2"
								src="./logo512.png"
								alt="profile"
							/>Name
						</a>
						<button class="btn btn-outline-secondary" onClick={e => this.logout()}>Logout</button>
					</div>
				</div>
			</nav>
			</>
		)
  }
}

// export
export default Nav
