import React from 'react'
import { GridHeaderItem } from './dashboard.styles'

export const GridHeader = () => {
	return (
		<>
			<GridHeaderItem>Name</GridHeaderItem>
			<GridHeaderItem>Birth Date</GridHeaderItem>
			<GridHeaderItem>Photo</GridHeaderItem>
		</>
	)
}
