// import
import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

// create classes
class Discover extends React.Component {

	tripRedirect = () => {
		console.log('trip')
	}

	fetchTrips = async () => {
		let trips = await axios.get(`${process.env.REACT_APP_SERVER_URL}/discover/trips`)
		trips = JSON.parse(trips.request.response)
		console.log(trips)
		// this.setState ({
		// 	trips
		// })
	}
	componentWillMount() {
		this.fetchTrips()
	}

  render() {
    return (
			<>
				{[1].map(trip =>
					<div className="col">
						<div onClick={e => this.tripRedirect()}>
							<div>
								<img
									src="https://a0.muscache.com/im/pictures/miso/Hosting-51904821/original/68062df7-7915-497c-a0a5-1f224be59d66.jpeg?im_w=720"
									className="card-img-top"
									alt="..."
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title mb-0">{"dummy - Ise's trip to Koh Phangan"}</h5>
							</div>
						</div>
					</div>
					)
				}
      </>
		)
  }
}

// export
export default Discover
