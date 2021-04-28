import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AppContext } from '../../context'
import { getLocations } from '../../utils'
import Dropdown from 'react-multilevel-dropdown'
import classes from './Navbar.module.css'

const Navbar = (props) => {
	const [state] = useContext(AppContext)
	const history = useHistory()

	let locations = []
	if (state.data.locations) {
		locations = getLocations(state.data.locations)
	}

	const handleClick = (id) => {
		history.push(`/category/D-${id}`)
	}

	const handleBranchClick = (e, id) => {
		e.stopPropagation()
		history.push(`/category/${id}`)
	}

	return (
		<nav className={classes.Navbar}>
			<div className={classes.Brand}>
				<Link to='/crownstack'>RENTAL MANAGEMENT SYSTEM</Link>
			</div>
			<Dropdown title='Select location' wrapperClassName={classes.Dropdown}>
				{locations.map((location) => (
					<Dropdown.Item
						key={location.id}
						onClick={() => handleClick(location.id)}
						className={classes.DropdownItem}
					>
						{location.location}
						<Dropdown.Submenu>
							{location.branches.map((branch) => (
								<Dropdown.Item
									className={classes.DropdownItem}
									key={branch.branchId}
									onClick={(e) => handleBranchClick(e, branch.branchId)}
								>
									{branch.name}
								</Dropdown.Item>
							))}
						</Dropdown.Submenu>
					</Dropdown.Item>
				))}
			</Dropdown>
		</nav>
	)
}

export default Navbar
