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
        <div class="container pt-4">
          <form onSubmit={ev => this.createActivity(ev)}>
            <div>
              <h3>Create new activity</h3>
              {/* choose category */}
              <div class="mb-3">
                <label class="form-label m-0">Category</label>
                <select name="category" class="form-control" required>
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
              <div class="mb-3">
                <label class="form-label m-0">Short Title</label>
                <input
                  name="title"
                  type="text"
                  class="form-control"
                  name="title"
                  required
                />
              </div>
              {/* description */}
              <div class="mb-3">
                <label class="form-label m-0">Description</label>
                <textarea
                  name="description"
                  class="form-control"
                  rows="7"
                  name="description"
                  required
                ></textarea>
              </div>
              {/* city */}
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  City
                </label>
                <input type="text" class="form-control" name="city" required />
              </div>
              {/* address */}
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                  name="address"
                >
                  Address
                </label>
                <AutoComplete />
              </div>
              {/* picture */}
              <div class="mb-3">
                <label for="formFileSm" class="form-label">
                  Add a picture
                </label>
                <input
                  class="form-control form-control-sm"
                  id="formFileSm"
                  type="file"
                  name="image"
                />
              </div>
              {/* button */}
              <div>
                <button class="btn btn-success">Submit</button>
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
