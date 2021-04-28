import React, { useContext } from 'react'
import { AppContext } from '../../context'
import { useHistory, useParams } from 'react-router-dom'
import classes from './Card.module.css'

const Card = ({ category }) => {
	const [, setState] = useContext(AppContext)
	const { id } = useParams()
	const history = useHistory()

	const handleClick = () => {
		const selected = category.subcategories.filter(
			(item) => item.name !== 'NA' && item.image
		)
		if (selected.length !== 0) {
			history.push('/category/' + id + '/subcategory')
			setState((prevState) => ({
				...prevState,
				selectedSubcategory: selected,
				selectedCategory: category.name,
			}))
		}
	}

	return (
		<div className={classes.Card} onClick={handleClick}>
			<img src={require(`../../assets/${category.image}`)} alt='asset' />
			<div className={classes.CardTitleContainer}>
				<p className={classes.CardTitle}>{category.name}</p>
			</div>
		</div>
	)
}

export default Card
