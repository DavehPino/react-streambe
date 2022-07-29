import React from 'react'
import { GridListItem } from './dashboard.styles'
import UserIconPNG from '../../assets/static/user-icon.png'
import { UserIcon } from './logout/UserIcon'

export const GridList = ( {name, birthDate, photo}) => {

	const validatePhoto = photo || UserIconPNG
    
	const parseBirthDate = (birthDate) => {
		const birthDateDate = new Date(birthDate)
		const parsedBirthDate = birthDateDate.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})

		return parsedBirthDate
	}
	return (
		<>
			<GridListItem>{name}</GridListItem>
			<GridListItem>{parseBirthDate(birthDate)}</GridListItem>
			<GridListItem>
				<UserIcon isPhoto={photo} icon={validatePhoto} isDashBoardPhoto/>
			</GridListItem>
		</>
	)
}
