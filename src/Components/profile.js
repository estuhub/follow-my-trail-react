// import
import React from "react";
import axios from 'axios'
import Nav from './Partials/nav'

// create classes
class Profile extends React.Component {
	state = {
		user: {}
	}
	changeInput = (val) => {
		this.setState ({
			user: val
		})
	}
	getResults = async () => {
		let user = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/user`)
		user = JSON.parse(user.request.response)
		this.props.handleChange(user)
	}
	componentWillMount() {
		this.getResults()
	}

  render() {
    return (
      <>
				<Nav />
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="row">
                <div className="col-10">
                  <p className="h2">Profile</p>
                </div>
                <div className="col-10 border-top border-grey">
                  <form action="/profile?_method=PATCH" method="POST">
                    <div className="my-3">
                      <label className="form-label mb-0">Name</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        value={ this.props.user.name }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label mb-0">Email</label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        value={  this.props.user.email }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Profile Picture</label>
                      <div className="host">
                        <img
                          src={  this.props.user.avatar }
                          alt="profile"
                          className="mb-3"
                        />
                      </div>
                      <input
                        name="avatar"
                        value={  this.props.user.avatar }
                        type="url"
                        className="form-control"
                      />
                    </div>
	                    <button className="btn btn-success">Save Changes</button>
                  </form>

                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="row">
                <div className="col-12 border-bottom border-grey mb-3">
                  <p className="h2">My Travels</p>
                </div>
                <div className="col-12 mb-3">
                  <a href="/create" className="btn btn-success">
                    List an activity
                  </a>
                </div>
                <div className="col">
                  <div>
                    <div>
                      <img
                        src="https://a0.muscache.com/im/pictures/miso/Hosting-51904821/original/68062df7-7915-497c-a0a5-1f224be59d66.jpeg?im_w=720"
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title mb-0">Buenos Aires</h5>
                      <small className="text-muted"> 153 places </small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <div>
                      <img
                        src="https://a0.muscache.com/im/pictures/miso/Hosting-51904821/original/68062df7-7915-497c-a0a5-1f224be59d66.jpeg?im_w=720"
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title mb-0">Koh Phangan</h5>
                      <small className="text-muted"> 45 places </small>
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
