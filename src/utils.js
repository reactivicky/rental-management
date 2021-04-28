export const getLocations = (data) => {
	return data.map((place) => ({
		location: place.name,
		id: place.dealers_id,
		branches: place.branches.map((branch) => ({
			branchId: branch.branch_id,
			name: branch.name,
		})),
	}))
}

export const getCatalogLocation = (data, id) => {
	return data
		.find((loc) => loc.dealers_id === id.substr(2))
		.branches.reduce((a, c) => {
			return [...a, ...c.categories]
		}, [])
		.map((item, i, self) => {
			const matchItem = self.filter((it) => it.name === item.name)
			const subs = matchItem
				.reduce((a, c) => {
					return [...a, ...c.subcategories]
				}, [])
				.filter(
					(thing, index, self) =>
						index === self.findIndex((t) => t.name === thing.name)
				)
			return {
				...item,
				subcategories: [...subs],
			}
		})
		.filter(
			(thing, index, self) =>
				index === self.findIndex((t) => t.name === thing.name)
		)
}
