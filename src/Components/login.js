// import
import React from 'react'
import axios from 'axios'
import { Redirect } from "react-router-dom"

axios.defaults.withCredentials = true

// how to inspect/confirm session details/cookies are working?

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
  render() {
    return (
			<>
				{this.state.loggedIn ?
					<Redirect
						to='/'
					/> :
					<div class="row login-body justify-content-center align-items-center">
						<div class="col-4">
							<div class="card">
								<div class="row">
									<div class="col-12 text-center">
										<div class="pt-5">
											<a href="#"
												><img
													class="logo"
													src="./logo512.png"
													alt="airbnb-logo"
											/></a>
										</div>
									</div>
									<div class="col-12">
										<div class="card-body">
											<form onSubmit={ev => this.login(ev)}>
												<div class="mb-3">
													<label class="form-label mb-0">Email</label>
													<input name="email" type="email" class="form-control" />
												</div>
												<div class="mb-3">
													<label class="form-label mb-0">Password</label>
													<input name="password" type="password" class="form-control" />
												</div>
												<div class="pb-3">
													<button class="btn btn-success">Login</button>
												</div>
												<div>
													<p>
														New to FMT? <a href="#" class="text-success">Signup</a>
													</p>
												</div>
											</form>
										</div>
									</div>
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
