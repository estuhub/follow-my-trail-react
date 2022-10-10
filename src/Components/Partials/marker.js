// import
import React from "react"

//do I need the map state here?
// tidy up a lot, actually. Pass down any funcs I need, remove dead ones.

class Marker extends React.Component {
  state = {
    map: {
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      },
      zoom: 12
    }
  }
	// markerOnClick also wants to set map center/zoom to the position of that pin so that it centres
	markerOnClick = (marker) => {
		// console.log(`marker coordinates`)
		// console.log(marker)
		// console.log(marker.geometry.location.lng)
		this.props.updateFocus(this.props.name)
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
		<div className="Pin"
		onClick={(ev) => this.markerOnClick(ev)}
		>
			<img
				src="https://th.bing.com/th/id/OIP.PswRYJEO6ptKds__PAoKXQAAAA?pid=ImgDet&w=300&h=275&rs=1"
				alt=""
				className="avatar-img"
				style={styles.pin}
			/>
	</div>
	)
  }
}

// export
export default Marker
