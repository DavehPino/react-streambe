import React from 'react'
import { UserNameText } from './dashboard.styles'

export const UserName = ({name}) => {
	return (
		<UserNameText>{`Hola ${name}`}</UserNameText>
	)
}
