// import
import React from 'react'
import axios from 'axios'
import { Redirect } from "react-router-dom"

axios.defaults.withCredentials = true

// how to inspect/confirm session details/cookies are working?
// move 'loggedIn' state to App and pull/set through props

class Login extends React.Component {
	state = {
		loggedIn: false
	}
	login = async (form) => {
		form.preventDefault()
		let login = await axios.post(process.env.REACT_APP_SERVER_URL + '/auth/login', {
		  email: form.target.email.value,
		  password: form.target.password.value
			}
		)
		this.setState({
			loggedIn: login.data
		})
	}

	signup = async (form) => {
		form.preventDefault()
		await axios.post(process.env.REACT_APP_SERVER_URL + '/auth/signup', {
			email: form.target.email.value,
			password: form.target.password.value,
			name: form.target.name.value,
			avatar: form.target.avatar.value
			}
		)
		this.login(form)
	}

  render() {
    return (
			<>
				{this.state.loggedIn ?
					<Redirect
						to='/'
					/> :
					<div class="row signup-body justify-content-center align-items-center">
						<div class="col-4">
							<div class="card">
								<div class="col pt-5 text-center">
									<img
										class="logo"
										src="./logo512.png"
										alt="airbnb-logo"
									/>
								</div>
								<div class="card-body">
									<form onSubmit={ev => this.signup(ev)}>
										<div class="mb-3">
											<label class="form-label mb-0">Your Full Name</label>
											<input name="name" type="text" class="form-control" />
										</div>
										<div class="mb-3">
											<label class="form-label mb-0">Profile Picture</label>
											<input
												name="avatar"
												type="text"
												class="form-control"
												placeholder="https//..."
											/>
										</div>
										<div class="mb-3">
											<label class="form-label mb-0">Email</label>
											<input name="email" type="email" class="form-control" />
										</div>
										<div class="mb-3">
											<label class="form-label mb-0">Password</label>
											<input name="password" type="password" class="form-control" />
										</div>
										<div class="pb-3">
											<button class="btn btn-success">Signup</button>
										</div>
										<div>
											<p>
												Already have an account?
												<a href="/login" class="text-success">Login</a>
											</p>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				}
			</>
		)
  }
}

// export
export default Login
