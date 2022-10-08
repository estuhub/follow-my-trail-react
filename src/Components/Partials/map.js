// import
import React from "react"
import GoogleMap from "google-map-react"
import Marker from './marker.js'
import axios from 'axios'

// bug: sometimes map loads before state has changed - need it to be responsive to state changing
//

class Map extends React.Component {
  state = {
    map: {
      center: {
        lat: 55,
        lng: 0
      },
      zoom: 5
    },
		places: []
	}

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
			theProp: []
		})
	}
	componentWillMount() {
		this.setMap()
	}

	setPlace = async () => {
		let places = await axios.get(`${process.env.REACT_APP_SERVER_URL}/map/koh-phangan/places`)
		places = JSON.parse(places.request.response)
		// console.log(places.geometry)
		this.setState ({
			places
		})
	}
	componentDidMount() {
		this.setPlace()
		// console.log(this.state.placess)
	}

	componentWillReceiveProps(props) {
		// console.log(props.test.center)
		this.setState ({
			map: {
				center: {
					lat: props.map.center.lat,
					lng: props.map.center.lng
				},
				zoom: props.map.zoom // this changes zoom before any location is selected!!
			}
		})
	}

	// updateZoom = () => {
	// 	console.log(this.props.test.map)
	// 	this.setState ({
	// 		theProp: this.props.test.map
	// 	})
	// }
	mapOnClick = (e) => {
		// console.log('click coordinates')
		console.log("latitude = ", e.lat)
		console.log("longtitude = ", e.lng)
		// this.logLatLong(e)
		// console.log(this.props);
	}
	// logLatLong = (e) => {
	// 	console.log("latitude = ", e.lat)
	// 	console.log("longtitude = ", e.lng)
	// }

  render() {
		const styles = {
    map: {
			width: '600px',
  		height: '600px'
    },
		pin: {
			width: '50px',
			height: '50px'
		}
	}
    return (
      <div className="map" style={styles.map}>
        <GoogleMap
          bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API_KEY}}
          center={this.state.map.center}
          zoom={this.state.map.zoom}
					onClick={(e) => {this.mapOnClick(e)}}
        >
					{this.state.places.map((place) => (
						<Marker
							lat={place.geometry.lat}
							lng={place.geometry.lng}
							name={place.name}
							updateFocus={this.props.updateFocus}
						/>
					))}
				</GoogleMap>
      </div>
    )
  }
}

// export
export default Map
