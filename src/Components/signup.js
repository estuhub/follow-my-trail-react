// import
import React from 'react'

// create classes
class Signup extends React.Component {
  render() {
    return (
			<>
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
							<form action="/auth/signup" method="POST">
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
			</>
		)
  }
}

// export
export default Signup
