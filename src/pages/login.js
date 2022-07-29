import React from 'react'
import { AuthForm } from '../components/login/AuthForm'
import { AuthContainer } from '../components/login/login.styles'
import { LoginHeader } from '../components/login/LoginHeader'

export const Login = () => {

	return (
		<AuthContainer>
			<LoginHeader>Login</LoginHeader>
			<AuthForm />
		</AuthContainer>
	)
}

