import React from 'react'
import { GridContainer } from './dashboard.styles'
import { GridHeader } from './GridHeader'
import { GridList } from './GridList'

export const DashBoardGrid = ({users: {users}}) => {
	return (
		<GridContainer>
			<GridHeader />
			{users.map(({contactId, name, birthDate, photo}) => {
				return (<GridList key={contactId} name={name} birthDate={birthDate} photo={photo}/>)
			})}
		</GridContainer>
	)
}
