import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getCatalogLocation } from '../../utils'
import { AppContext } from '../../context'
import Card from '../Card/Card'

const Catalog = () => {
	const { id } = useParams()
	const [state] = useContext(AppContext)

	let location
	if (id.includes('D-')) {
		location = getCatalogLocation(state.data.locations, id)
	}

	let branch = { categories: [] }
	if (state.data.locations) {
		branch = state.data.locations
			.map((location) => {
				return location.branches.find((item) => item.branch_id === id)
			})
			.find((item) => item !== undefined)
	}

	let data
	if (location) {
		data = location
	} else if (branch && branch.categories.length) {
		data = branch.categories
	}

	if (!data) {
		return <p>Something went wrong</p>
	}

	return (
		<div className='Catalog'>
			<p className='Text'>Equipment Catalog</p>
			<div className='CardContainer'>
				{data.map((category, i) => (
					<Card key={i} category={category} />
				))}
			</div>
		</div>
	)
}

export default Catalog
