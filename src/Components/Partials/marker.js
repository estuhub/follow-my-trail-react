// import
import React from "react"

class Marker extends React.Component {
  state = {
    map: {
      key: {
        key: "AIzaSyBA6mFqPpHyp657OgfA-dQio8hVTGVgOUk"
      },
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      },
      zoom: 12
    }
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
		<div className="SuperAwesomePin"
		onClick={(e) => console.log(this.props.lng) }
		>
			<img
				src="https://th.bing.com/th/id/OIP.PswRYJEO6ptKds__PAoKXQAAAA?pid=ImgDet&w=300&h=275&rs=1"
				alt=""
				class="avatar-img"
				style={styles.pin}
			/>
	</div>
	)
  }
}

// export
export default Marker
