// import
import React from 'react'

// create classes
class Where extends React.Component {

	

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
											<label class="form-label mb-0">Where To</label>
											<select
												class="form-select"
												name="location"
											>
												<option disabled value="1">Any Location</option>
												<option disabled>Koh Samui</option>
												<option selected>Koh Phangan</option>
												<option disabled>Koh Tao</option>
											</select>
										</div>
										<button class="btn btn-primary">Search</button>
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
export default Where
