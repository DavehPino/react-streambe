import React from 'react'
import { useNavigate } from 'react-router'
import UserIconPNG from '../../../assets/static/user-icon.png'
import { useLogin } from '../../../hooks/useLogin'
import { LogoutButton } from '../dashboard.styles'
import { UserIcon } from './UserIcon'

export const UserIconBox = () => {
	const navigate = useNavigate ()
	const {setUser} = useLogin()

	const handleLogout = (e) => {
		e.preventDefault()
		window.localStorage.removeItem('loggedUser')
		setUser(null)
		navigate('/')
	}

	return (
		<>
			<UserIcon icon={UserIconPNG}/>
			<LogoutButton onClick={handleLogout}>Logout</LogoutButton>
		</>
	)
}
