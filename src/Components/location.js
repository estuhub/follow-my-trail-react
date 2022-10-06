// import
import React from "react";
import Map from './Partials/map'
import axios from 'axios'

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
		focus: 'La Casa'
	}

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
		this.setPlace()
	}

	zoomMap = (name, geometry) => {
		console.log(name)
		// console.log(geometry)
		this.setState ({
			map: {
				center: {
					lat: geometry.lat,
					lng: geometry.lng
				},
				zoom: geometry.zoom
			}
		})
		console.log(this.state.map.center.lat)
		console.log(this.state.map.center.lng)
		console.log(this.state.map.zoom)
	}

	updateFocus = (param) => {
		console.log('here')
		// console.log(param)
		this.setState ({
			focus: param
		})
		console.log(this.state.focus)
	}

  render() {
    return (
			<>
        <div class="container">
          {/* location */}
          <h2 class="pt-4">Koh Phangan</h2>
          <small class="card-text">120 places</small>
          <div class="row">
            {/* card section */}
            <div class="col">
              <div class="wrap"></div>
            </div>
          </div>
          {/* end of location section*/}
          {/* activities & map section */}
          <div class="row mt-4">
            <div class="col-6">
              <h5 class="mb-3">Things to do</h5>
              {/* category start */}
              <h6>Sunsets</h6>
							{/* accordion start */}
	              <div class="accordion accordion-flush" id="accordionExample">
									{this.state.places.map((place) => (
										<div class="accordion-item">
		                  <h2 class="accordion-header" id="headingOne">
		                    <button
		                      class="accordion-button"
		                      type="button"
		                      data-bs-toggle="collapse"
		                      data-bs-target="#collapseOne"
		                      aria-expanded="true"
		                      aria-controls="collapseOne"
													onClick={ev => this.zoomMap(ev.target.innerHTML, place.geometry)}
		                    >
												{place.name}
		                    </button>
		                  </h2>
		                  <div
		                    id="collapseOne"
												className={place.name === this.state.focus ? "accordion-collapse collapse show" : "accordion-collapse collapse collapsed"}
		                    aria-labelledby="headingOne"
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
              {/* accordion end */}
            	<div class="col-6">
              	{/* map */}
              <Map test={this.state.map} updateFocus={this.updateFocus}/>
            </div>
          </div>
        </div>
			</div>
		</>
    );
  }
}

// export
export default Location;
