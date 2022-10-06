// import
import React from "react"
// import axios from 'axios'
import GoogleMap from "google-map-react"

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
    }
	}
    return (
      <div className="map" style={styles.map}>
        <GoogleMap
          bootstrapURLKeys={this.state.map.key}
          center={this.state.map.center}
          zoom={this.state.map.zoom}
        >
				</GoogleMap>
      </div>
    )
  }
}

// export
export default Map
