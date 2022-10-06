// import
import React from "react"
import axios from 'axios'
import GoogleMap from "google-map-react"
import Marker from './marker.js'

// bug: sometimes map loads before state has changed - need it to be responsive to state changing

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
		// ,
		// place: {
		// 	coordinates: {
		// 		lat: 0,
		// 		lng: 0,
		// 	},
		// 	zoom: 0
		// 	}
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
				}
		})
	}

	setPlace = async () => {
		let places = await axios.get(`${process.env.REACT_APP_SERVER_URL}/map/koh-phangan/places`)
		places = JSON.parse(places.request.response)
		console.log(places.geometry)
		this.setState ({
			places
		})
		// 	{
		// 		coordinates: {
		// 			lat: place.geometry.lat,
		// 			lng: place.geometry.lng,
		// 		},
		// 		zoom: place.geometry.zoom
		// 		}
		// })
	}

	componentWillMount() {
		this.setMap()
	}

	componentDidMount() {
		this.setPlace()
	}

	mapOnClick = (e) => {
		console.log('click coordinates')
		this.logLatLong(e)
	}
	logLatLong = (e) => {
		console.log("latitude = ", e.lat)
		console.log("longtitude = ", e.lng)
	}
	markerOnClick = (marker) => {
		console.log(`marker coordinates`)
		console.log(marker.geometry.location.lat)
		console.log(marker.geometry.location.lng)
	}

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
						/>
					))}
				</GoogleMap>
      </div>
    )
  }
}

// export
export default Map
