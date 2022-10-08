// import
import React from "react";
import Map from './Partials/map'
import axios from 'axios'

/*
to do
pull initial map state from location
	set location name in page from it
considering categories
*/

// create classes
class Location extends React.Component {
	state = {
		places: [],
		map: {
      center: {
        lat: 55,
        lng: 0
      },
      zoom: 5
    },
		focus: 'location'
	}

	// fetch all places from database
	// not yet linked to selected/specific location
	// rename to setPlaces
	setPlace = async () => {
		let places = await axios.get(`${process.env.REACT_APP_SERVER_URL}/map/koh-phangan/places`)
		places = JSON.parse(places.request.response)
		// console.log(places)
		this.setState ({
			places
		})
		// console.log(this.state.places[0].address)
	}
	componentDidMount() {
		this.setMap()
		this.setPlace()
	}

	// duplicated on map component
	setMap = async () => {
		let mapGeometry = await axios.get(`${process.env.REACT_APP_SERVER_URL}/map/koh-phangan`)
		mapGeometry = JSON.parse(mapGeometry.request.response)
		this.setState ({
			map: {
				center: {
					lat: mapGeometry.geometry.lat,
					lng: mapGeometry.geometry.lng,
				},
				zoom: mapGeometry.geometry.zoom
			},
			focus: 'location'
		})
	}

	// updates state 'map' - also takes name
	// zoom wants to be fed from data
	// also need the collapsing to change map
	zoomMap = (name, geometry) => {
		console.log(name)
		console.log(this.state.focus);
		// console.log(geometry)
		this.setState ({
			map: {
				center: {
					lat: geometry.lat,
					lng: geometry.lng
				},
				zoom: 15
			},
			focus: name
		})
		if (name == this.state.focus) {
			this.setMap()

		}
		// console.log(this.state.map.center.lat)
		// console.log(this.state.map.center.lng)
		// console.log(this.state.map.zoom)
	}

	// updates state 'focus'
	updateFocus = (param) => {
		console.log(param)
		// console.log(this.state.places)
		this.setState ({
			focus: param
		})
		let place = this.state.places.filter(place => place.name == param)[0]
		console.log(place.geometry)
	this.zoomMap(param, place.geometry)
		// console.log(this.state.focus)
	}

  render() {
    return (
			<>
			  <div class="container">
					{/* location */}
					<h2 class="pt-4">Koh Phangan</h2>
					<small class="card-text">120 places</small>
					{/* end of location section*/}
					<div class="row">
						<div class="col">
						<h5 class="mb-3">Things to do</h5>
						{/* category start */}
						<h6>Sunsets</h6>
						{/* accordion start */}
							<div class="accordion accordion-flush" id="accordionExample">
								{this.state.places.map((place, i) => (
									<div class="accordion-item">
										<h2 class="accordion-header" id={`heading${i}`}>
											<button
												class="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target={`#collapse${i}`}
												aria-expanded="false"
												aria-controls={`collapse${i}`}
												onClick={ev => this.zoomMap(ev.target.innerHTML, place.geometry)}
											>
											{place.name}
											</button>
										</h2>
										<div
											id={`collapse${i}`}
											className={place.name === this.state.focus ? "accordion-collapse collapse show" : "accordion-collapse collapse collapsed"}
											aria-labelledby={`heading{i}`}
											data-bs-parent="#accordionExample"
										>
											<div class="accordion-body">
												<div class="row">
													<div class="col-6">
														<p>
															{place.description}
														</p>
														<p>{place.address}</p>
													</div>
													<div class="col-6">
														<img
															src={place.images[0]}
															class="img-fluid"
															alt=""
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</ div>
						</div>
						<div class="col">
							<Map map={this.state.map} updateFocus={this.updateFocus}/>
						</div>
					</div>
				</div>
		</>
    );
  }
}

// export
export default Location;
