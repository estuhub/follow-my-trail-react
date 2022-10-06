// import
import React from "react"
import axios from 'axios'
import GoogleMap from "google-map-react"
import Marker from './marker.js'



class Map extends React.Component {
  state = {
    map: {
      center: {
        lat: 55,
        lng: 0
      },
      zoom: 5
    }
  }
	setMap = async () => {
		let mapGeometry = await axios.get(`${process.env.REACT_APP_SERVER_URL}/map`)
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
	componentWillMount() {
		this.setMap()
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
					<Marker
					lat={9.730213}
					lng={100.017587}
					/>
				</GoogleMap>
      </div>
    )
  }
}

// export
export default Map
