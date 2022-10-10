// import
import React from "react";
import AutoComplete from "./Partials/autocomplete";
import axios from "axios";

// create classes
class Create extends React.Component {
  createActivity = async form => {
    form.preventDefault();
    console.log(form);
    let activity = await axios.post(
      process.env.REACT_APP_SERVER_URL + "/activities"
    );
    // this.setState({
    //   loggedIn: login.data
    // });
  };
  render() {
    return (
      <>
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
                <AutoComplete />
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
      </>
    );
  }
}

// export
export default Create;
