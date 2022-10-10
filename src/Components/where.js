// import
import React from 'react'
import { Redirect } from 'react-router-dom'
import Location from './location'

// create classes
class Where extends React.Component {
	state = {
		location: 'Koh Phangan',
		submitLocation: false
	}
	setLocation = (form) => {
		form.preventDefault()
		// redirect to location page
		// pass the location value as a prop
		this.setState({
			submitLocation: true
		})
	}
	handleChange = (event) => {
		this.setState({
			location: event.target.value
		})
	}

  render() {
    return (
			<>
				{this.state.submitLocation === false ?
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
									<div className="col-12">
										<div className="card-body">
											<form onSubmit={ev => this.setLocation(ev)}>
												<div className="mb-3">
													<label className="form-label mb-0">Where To</label>
													<select
														className="form-select"
														name="location"
														value={this.location}
														onChange={this.handleChange}
													>
														<option value="Any Location">Any Location</option>
														<option disabled value="Koh Samui">Koh Samui</option>
														<option selected value="Koh Phangan">Koh Phangan</option>
														<option disabled value="Koh Tao">Koh Tao</option>
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
					:
					<Redirect to='/location' />
				}
			</>
		)
  }
}

// export
export default Where
