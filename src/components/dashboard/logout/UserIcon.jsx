import React from 'react'
import { UserIconContainer, UserImage } from '../dashboard.styles'

export const UserIcon = ({ icon, isPhoto = false, isDashBoardPhoto = false }) => {
	return (
		<UserIconContainer isDashBoardPhoto={isDashBoardPhoto}>
			<UserImage isPhoto={isPhoto} src={icon} alt='user-icon'/>
		</UserIconContainer>
	)
}
