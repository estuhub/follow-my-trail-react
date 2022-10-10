// import
import React from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import axios from "axios";
import { Redirect } from 'react-router-dom'

// create classes
class Create extends React.Component {
	state = {
		activityCreated: false,
		geometry: {
			lat: 0,
			lng: 0,
			zoom: 15
		}
	}

  createActivity = async form => {
    form.preventDefault()
    await axios.post(
      process.env.REACT_APP_SERVER_URL + "/activities", {
				title: form.target.title.value,
				category: form.target.category.value,
				description: form.target.description.value,
				image: form.target.image.value,
				geometry: this.state.geometry
			}
    )
    this.setState({
      activityCreated: true //login.data
    })
  }
  render() {
    return (
      <>
				{!this.state.activityCreated ?
	        <div className="container pt-4">
	          <form onSubmit={ev => this.createActivity(ev)}>
	            <div>
	              <h3>Create new activity</h3>
	              {/* choose category */}
	              <div className="mb-3">
	                <label className="form-label m-0">Category</label>
	                <select name="category" className="form-control" required>
	                  <option>- Choose a category -</option>
	                  <option>Beach</option>
	                  <option>Food</option>
	                  <option>Gems</option>
	                  <option>Hikes</option>
	                  <option>Sunsets</option>
	                  <option>Uncategorized</option>
	                </select>
	              </div>
	              {/* title */}
	              <div className="mb-3">
	                <label className="form-label m-0">Short Title</label>
	                <input
	                  name="title"
	                  type="text"
	                  className="form-control"
										// eslint-disable-next-line
	                  name="title"
	                  required
	                />
	              </div>
	              {/* description */}
	              <div className="mb-3">
	                <label className="form-label m-0">Description</label>
	                <textarea
	                  name="description"
	                  className="form-control"
	                  rows="7"
										// eslint-disable-next-line
	                  name="description"
	                  required
	                ></textarea>
	              </div>
	              {/* city */}
	              <div className="mb-3">
	                <label for="exampleFormControlInput1" className="form-label">
	                  City
	                </label>
	                <input type="text" className="form-control" name="city" required />
									<GooglePlacesAutocomplete
										apiKey={"AIzaSyCCYmCvCdLQ3_-UZtmNHRElj_FWYX8778M"}
										selectProps={{
										    onChange: e => geocodeByAddress(e.label)
												  .then(results => getLatLng(results[0]))
												  .then(({ lat, lng }) => this.setState({geometry: {lat, lng, zoom:15}}))
										}}
									/>
	              </div>
	              {/* address */}
	              <div className="mb-3">
	                <label
	                  for="exampleFormControlInput1"
	                  className="form-label"
	                  name="address"
	                >
	                  Address
	                </label>
	              </div>
	              {/* picture */}
	              <div className="mb-3">
	                <label for="formFileSm" className="form-label">
	                  Add a picture
	                </label>
	                <input
	                  className="form-control form-control-sm"
	                  id="formFileSm"
	                  type="file"
	                  name="image"
	                />
	              </div>
	              {/* button */}
	              <div>
	                <button className="btn btn-success">Submit</button>
	              </div>
	            </div>
	          </form>
	          {/* like, share, add to my list */}
	          {/* id of creator and id of current user */}
	        </div>
					:
					<Redirect to='/location' />
				}
      </>
    );
  }
}

// export
export default Create;
