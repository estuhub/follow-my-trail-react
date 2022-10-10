// import
import React from 'react'

// create classes
class Signup extends React.Component {
  render() {
    return (
			<>
			<div className="row signup-body justify-content-center align-items-center">
				<div className="col-4">
					<div className="card">
						<div className="col pt-5 text-center">
							<img
								className="logo"
								src="./logo512.png"
								alt="airbnb-logo"
							/>
						</div>
						<div className="card-body">
							<form action="/auth/signup" method="POST">
								<div className="mb-3">
									<label className="form-label mb-0">Your Full Name</label>
									<input name="name" type="text" className="form-control" />
								</div>
								<div className="mb-3">
									<label className="form-label mb-0">Profile Picture</label>
									<input
										name="avatar"
										type="text"
										className="form-control"
										placeholder="https//..."
									/>
								</div>
								<div className="mb-3">
									<label className="form-label mb-0">Email</label>
									<input name="email" type="email" className="form-control" />
								</div>
								<div className="mb-3">
									<label className="form-label mb-0">Password</label>
									<input name="password" type="password" className="form-control" />
								</div>
								<div className="pb-3">
									<button className="btn btn-success">Signup</button>
								</div>
								<div>
									<p>
										Already have an account?
										<a href="/login" className="text-success">Login</a>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			</>
		)
  }
}

// export
export default Signup
