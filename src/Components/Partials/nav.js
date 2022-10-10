// import
import React from 'react'

// create classes
class Nav extends React.Component {
  render() {
    return (
			<>
			<nav className="container p-2 mb-4">
				<div className="row">
					<div className="col">
						<a href="/houses"
							><img className="logo" src="./logo192.png" alt="somelogo"
						/></a>
					</div>
					<div className="col text-end">
						<a href="/profile" className="btn btn-outline-secondary">
							<img
								className="me-2"
								src="./logo512.png"
								alt="profile"
							/>Name
						</a>
						<a href="/auth/logout" className="btn btn-outline-secondary">Logout</a>
					</div>
				</div>
			</nav>
			</>
		)
  }
}

// export
export default Nav
