import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useLogin } from '../../hooks/useLogin'
import { ErrorMessage } from './ErrorMessage'
import { Button, Form, Input } from './login.styles'

export const AuthForm = () => {
	const {userName, password, setUserName, setPassword, fetchAuth, successfulAuth, validateToken} = useLogin()
	const [showErrorMessage, setShowErrorMessage] = useState(false)
	const navigate = useNavigate()

	const handleUserNameChange = (event) => {
		setUserName(event.target.value)
	}
	const handlePwdChange = (event) => {
		setPassword(event.target.value)
	}
	const handleLogin = async (e) => {
		e.preventDefault()
		await fetchAuth()
		if(!successfulAuth){
			setShowErrorMessage(true)
		}
	}

	useEffect(() => {
		if(successfulAuth){
			navigate('/dashboard')
		}
	}, [successfulAuth])
    

	useEffect(() => {
		const loggedUser = window.localStorage.getItem('loggedUser')
		if(loggedUser){
			const user = JSON.parse(loggedUser)
			validateToken(user.access_token)
			navigate('/dashboard')
		}
	}, [])

	return (
		<>
			<Form>
				<Input
					placeholder='Username'
					value={userName}
					onChange={handleUserNameChange}
					type="text"
				></Input>
				<Input
					placeholder='Password'
					value={password}
					onChange={handlePwdChange}
					type="password"
				></Input>
				<Button
					disabled={!password || !userName}
					type="submit"
					onClick={handleLogin}
				>
          Ingresar
				</Button>
			</Form>
			{showErrorMessage && <ErrorMessage />}
		</>
	)
}
