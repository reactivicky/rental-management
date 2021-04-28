import React from 'react'
import classes from './Home.module.css'

const Home = () => {
	return (
		<div className={classes.Home}>
			<div>
				<h1 className={classes.Title}>Welcome to Rental Management System.</h1>
				<p className={classes.Subtitle}>Please select Location</p>
			</div>
		</div>
	)
}

export default Home
