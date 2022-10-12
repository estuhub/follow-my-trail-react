// import
import React from "react";
import Map from './Partials/map'
import axios from 'axios'
import Nav from './Partials/nav'

/*
to do
pull initial map state from location
	set location name in page from it
considering categories
*/

// create classes
class Trip extends React.Component {
	state = {
		activities: [],
		map: {
      center: {
        lat: 55,
        lng: 0
      },
      zoom: 5
    },
		focus: 'location'
		,
		userActivities: {
			Likes: [],
			Dislikes: [],
			Visited: [],
			Uncategorised: []
		}
	}

	// fetch all activities from database
	// not yet linked to selected/specific location
	setActivities = async () => {
		let activities = await axios.get(`${process.env.REACT_APP_SERVER_URL}/map/koh-phangan/activities`)
		activities = JSON.parse(activities.request.response)
		// console.log(activitys)
		this.setState ({
			activities
		})
		// console.log(this.state.activitys[0].address)
	}
	componentDidMount() {
		this.setMap()
		this.setActivities()
		this.pullUserActivities()
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
		if (name === this.state.focus) {
			this.setMap()

		}
		// console.log(this.state.map.center.lat)
		// console.log(this.state.map.center.lng)
		// console.log(this.state.map.zoom)
	}

	// updates state 'focus'
	updateFocus = (param) => {
		console.log(param)
		this.setState ({
			focus: param
		})
		let activity = this.state.activities.filter(activity => activity.name === param)[0]
	this.zoomMap(param, activity.geometry)
		// console.log(this.state.focus)
	}

	addLocation = async () => {
		//if clicked, takes location state from props
		console.log(this.props.location)
		//sends post request to backend
		// with user ID and location name
		// route finds user document and updates document
		let locationAdded = await axios.post(`${process.env.REACT_APP_SERVER_URL}/profile/add-location`, {
			location: this.props.location,
			user: this.props.user
		})
		// updates 'trips' array to include that location and returns
		// !! update user in app state (to include the trips)
		console.log(locationAdded.data)
	}

	categoriseActivity = async (category, activity) => {
		console.log(this.props.user.id)
		console.log(category)
		console.log(activity)
		let categoriseActivity = await axios.post(`${process.env.REACT_APP_SERVER_URL}/activities/categorise`, {
			userID: this.props.user.id,
			category,
			activity
		})
		console.log(categoriseActivity)
	}

	pullUserActivities = async () => {
		let userActivities = await axios.post(`${process.env.REACT_APP_SERVER_URL}/activities/users-trip`, {
			userID: this.props.user.id,
		})
		// console.log(userActivities.data.likes)
		// console.log(this.state.activities)
		// take the individual arrays, break html into the three parts, populate each accordingly. Done.
		let userOther = []
		this.state.activities.forEach(activity => {
			if (
				!userActivities.data.likes.includes(activity.title)
				&&
				!userActivities.data.dislikes.includes(activity.title)
				&&
				!userActivities.data.been.includes(activity.title)
			) {
				userOther.push(activity.title)
				console.log(activity)
			}
		})
		this.setState({
			userActivities: {
				Likes: [userActivities.data.likes],
				Dislikes: [userActivities.data.dislikes],
				Visited: [userActivities.data.been],
				Uncategorised: userOther
			}
		})
		// console.log(this.state.userActivities)
		Object.entries(this.state.userActivities).forEach(([category, activities]) => {
		  // console.log(key, value) // "someKey" "some value", "hello" "world", "js javascript foreach object"
			activities.forEach(activity => {
				console.log(activity);
				// html here, use key as 'category'
			})
		})

		// now need to take the userActivities and build the html from it
		// array of arrays? like: userActivities = [this.state.likes, dislikes ...]
		// then forEach item in array, then the same as what I already have
		// would need to use index to say 'likes', 'dislikes', 'been'
		// not very direct method but would work
		// this will want replacing with objects, using the keys as the names, fetching arrays from within

		// sidenote ... accordions in accordions?
		// and ... if activity not in one of these lists, then 'other'
		// to make the activities lists not duplicated - run through a set on backend

	}

  render() {
    return (
			<>
				<Nav />
			  <div class="container">
					{/* location */}
					<h2 class="pt-4">{this.props.location}</h2>
					<h2 class="pt-4">This User's Name's trip</h2>
					<button onClick={this.addLocation}>Add location to profile</button>
					<small class="card-text">120 activities</small>
					{/* end of location section*/}
					<div class="row">
						<div class="col">
						<h5 class="mb-3">Things to do</h5>
						<button>Create new activity</button>
						{/* category start */}
						<h6>Recommendations</h6>
						<h6>Dislikes</h6>
						<h6>Not Visited</h6>
						{/* accordion start */}
							<div class="accordion accordion-flush" id="accordionExample">
								{this.state.activities.map((activity, i) => (
									<div class="accordion-item">
										<h2 class="accordion-header" id={`heading${i}`}>
											<button
												class={activity.title === this.state.focus ? "accordion-button" : "accordion-button collapsed"}
												type="button"
												data-bs-toggle="collapse"
												data-bs-target={`#collapse${i}`}
												aria-expanded="false"
												aria-controls={`collapse${i}`}
												onClick={ev => this.zoomMap(ev.target.innerHTML, activity.geometry)}
											>
											{activity.title}
											</button>
										</h2>
										<div
											id={`collapse${i}`}
											className={activity.title === this.state.focus ? "accordion-collapse collapse show" : "accordion-collapse collapse collapsed"}
											aria-labelledby={`heading{i}`}
											data-bs-parent="#accordionExample"
										>
											<div class="accordion-body">
												<div class="row">
													<div class="col-6">
														<p>
															{activity.description}
														</p>
														<p>{activity.address}</p>
														<button value="likes" onClick={ev => this.categoriseActivity(ev.target.value, activity.title)}>Like</button>
														<button value="dislikes" onClick={ev => this.categoriseActivity(ev.target.value, activity.title)}>Not interested</button>
														<button value="been" onClick={ev => this.categoriseActivity(ev.target.value, activity.title)}>Been</button>
													</div>
													<div class="col-6">
														<img
															src={activity.image}
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
export default Trip;
