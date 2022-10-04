// import
import React from 'react'

// create classes
class Nav extends React.Component {
  render() {
    return (
			<>
			<nav class="container p-2 mb-4">
				<div class="row">
					<div class="col">
						<a href="/houses"
							><img class="logo" src="./logo192.png" alt="somelogo"
						/></a>
					</div>
					<div class="col text-end">
						<a href="/profile" class="btn btn-outline-secondary">
							<img
								class="me-2"
								src="./logo512.png"
								alt="profile"
							/>Name
						</a>
						<a href="/auth/logout" class="btn btn-outline-secondary">Logout</a>
					</div>
				</div>
			</nav>
			</>
		)
  }
}

// export
export default Nav
