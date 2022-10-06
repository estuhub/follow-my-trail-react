// import
import React from "react"
// import axios from 'axios'
import GoogleMap from "google-map-react"
// import Marker from './marker.js'

const Marker = props => {
  return (
		<div className="SuperAwesomePin">
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
        >
				<Marker lat={9.730213} lng={100.017587} />
				</GoogleMap>
      </div>
    )
  }
}



// export
export default Map
