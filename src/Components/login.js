// import
import React from 'react'

// create classes
class Login extends React.Component {
  render() {
    return (
			<>
			<div class="row login-body justify-content-center align-items-center">
				<div class="col-4">
					<div class="card">
						<div class="row">
							<div class="col-12 text-center">
								<div class="pt-5">
									<a href="/login"
										><img
											class="logo"
											src="./logo512.png"
											alt="airbnb-logo"
									/></a>
								</div>
							</div>
							<div class="col-12">
								<div class="card-body">
									<form action="/auth/login" method="POST">
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
												New to FM? <a href="/login" class="text-success">Signup</a>
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
