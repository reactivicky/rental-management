import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../../context'
import SubCard from './SubCard/SubCard'

const Subcategory = () => {
	const [state] = useContext(AppContext)
	const history = useHistory()

	const handleClick = () => {
		history.goBack()
	}

	return (
		<div className='Catalog'>
			<p className='Text'>
				<span onClick={handleClick} style={{ cursor: 'pointer' }}>
					Equipment Catalog
				</span>{' '}
				/ {state.selectedCategory}
			</p>
			<div className='CardContainer'>
				{state.selectedSubcategory.map((item, i) => (
					<SubCard key={i} item={item} />
				))}
			</div>
		</div>
	)
}

export default Subcategory
