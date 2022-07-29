import React from 'react'
import { useLogin } from '../../hooks/useLogin'
import { NavBarContainer } from './dashboard.styles'
import { Logout } from './Logout'
import { UserName } from './UserName'

export const NavBar = () => {
	const {user: {name}} = useLogin()
	return (
		<NavBarContainer>
			<UserName name={name}/>
			<Logout></Logout>
		</NavBarContainer>
	)
}
