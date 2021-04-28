import React from 'react'
import classes from './SubCard.module.css'

const SubCard = ({ item }) => {
	return (
		<div className={classes.Card}>
			<img
				src={require(`../../../assets/subcategory/${item.image}`)}
				alt='asset'
			/>
			<div className={classes.CardTitleContainer}>
				<p className={classes.CardTitle}>{item.name}</p>
			</div>
		</div>
	)
}

export default SubCard
