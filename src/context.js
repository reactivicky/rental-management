import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'

export const AppContext = createContext()

export const AppProvider = (props) => {
	const [state, setState] = useState({
		data: {},
		selectedSubcategory: [],
		selectedCategory: '',
	})

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get('fakeData.json')
				setState((prevState) => ({ ...prevState, data: res.data.data }))
			} catch (e) {
				console.log(e)
			}
		}
		fetchData()
	}, [])

	return (
		<AppContext.Provider value={[state, setState]}>
			{props.children}
		</AppContext.Provider>
	)
}
