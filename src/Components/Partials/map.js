// import
import React from "react"
// import axios from 'axios'
import GoogleMap from "google-map-react"
// import Marker from './marker.js'

const Marker = props => {
  return (
		<div className="SuperAwesomePin"
		onClick={(e) => {	console.log(`marker coordinates`)
			console.log('ah')}}
		>
			<img
				src="https://th.bing.com/th/id/OIP.PswRYJEO6ptKds__PAoKXQAAAA?pid=ImgDet&w=300&h=275&rs=1"
				alt=""
				class="avatar-img"
			/>
	</div>
	)
}

class Map extends React.Component {
  state = {
    map: {
      key: {
        key: "AIzaSyBA6mFqPpHyp657OgfA-dQio8hVTGVgOUk"
      },
      center: {
        lat: 9.730213,
        lng: 100.017587
      },
      zoom: 12
    }
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
          bootstrapURLKeys={this.state.map.key}
          center={this.state.map.center}
          zoom={this.state.map.zoom}
					onClick={(e) => {this.mapOnClick(e)}}
        >
					<Marker
					lat={9.730213}
					lng={100.017587}
					onClick={(e) => {this.markerOnClick(e)}}

					/>
				</GoogleMap>
      </div>
    )
  }
}



// export
export default Map
