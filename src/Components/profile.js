// import
import React from "react";
import axios from 'axios'

// create classes
class Profile extends React.Component {
	state = {
		user: {}
	}
	changeInput = (val) => {
		console.log(val)
		this.setState ({
			user: val
		})
	}
	getResults = async () => {
		// console.log('hi');
		// e.preventDefault()
		let tester = await axios.get(process.env.REACT_APP_SERVER_URL)
		let user = JSON.parse(tester.request.response)
		// console.log(user.name)
		this.changeInput(user)
	}
	componentWillMount() {
		this.getResults()
	}
  render() {
    return (
      <>
        <div class="container">
          <div class="row">
            <div class="col-5">
              <div class="row">
                <div class="col-10">
                  <p class="h2">Profile</p>
                </div>
                <div class="col-10 border-top border-grey">
                  <form action="/profile?_method=PATCH" method="POST">
                    <div class="my-3">
                      <label class="form-label mb-0">Name</label>
                      <input
                        name="name"
                        type="text"
                        class="form-control"
                        value={ this.state.user.name }
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label mb-0">Email</label>
                      <input
                        name="email"
                        type="email"
                        class="form-control"
                        value={  this.state.user.email }
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Profile Picture</label>
                      <div class="host">
                        <img
                          src={  this.state.user.avatar }
                          alt="profile"
                          class="mb-3"
                        />
                      </div>
                      <input
                        name="avatar"
                        value={  this.state.user.avatar }
                        type="url"
                        class="form-control"
                      />
                    </div>
	                    <button class="btn btn-success">Save Changes</button>
                  </form>

                </div>
              </div>
            </div>
            <div class="col-7">
              <div class="row">
                <div class="col-12 border-bottom border-grey mb-3">
                  <p class="h2">My Travels</p>
                </div>
                <div class="col-12 mb-3">
                  <a href="/houses/create" class="btn btn-success">
                    List an activity
                  </a>
                </div>
                <div class="col">
                  <div>
                    <div>
                      <img
                        src="https://a0.muscache.com/im/pictures/miso/Hosting-51904821/original/68062df7-7915-497c-a0a5-1f224be59d66.jpeg?im_w=720"
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title mb-0">Buenos Aires</h5>
                      <small class="text-muted"> 153 places </small>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div>
                    <div>
                      <img
                        src="https://a0.muscache.com/im/pictures/miso/Hosting-51904821/original/68062df7-7915-497c-a0a5-1f224be59d66.jpeg?im_w=720"
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title mb-0">Koh Phangan</h5>
                      <small class="text-muted"> 45 places </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// export
export default Profile;
