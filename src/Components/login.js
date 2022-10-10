// import
import React from 'react'

// create classes
class Login extends React.Component {
  render() {
    return (
			<>
			<div className="row login-body justify-content-center align-items-center">
				<div className="col-4">
					<div className="card">
						<div className="row">
							<div className="col-12 text-center">
								<div className="pt-5">
									<a href="/login"
										><img
											className="logo"
											src="./logo512.png"
											alt="airbnb-logo"
									/></a>
								</div>
							</div>
							<div className="col-12">
								<div className="card-body">
									<form action="/auth/login" method="POST">
										<div className="mb-3">
											<label className="form-label mb-0">Email</label>
											<input name="email" type="email" className="form-control" />
										</div>
										<div className="mb-3">
											<label className="form-label mb-0">Password</label>
											<input name="password" type="password" className="form-control" />
										</div>
										<div className="pb-3">
											<button className="btn btn-success">Login</button>
										</div>
										<div>
											<p>
												New to FM? <a href="/login" className="text-success">Signup</a>
											</p>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</>
		)
  }
}

// export
export default Login
