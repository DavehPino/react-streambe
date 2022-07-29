import {useState, useEffect} from 'react'
import { getAuth } from '../services/authService'

export const useLogin = () => {
	const initialUser = JSON.parse(window.localStorage.getItem('loggedUser'))
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState(initialUser)
	const [successfulAuth, setSuccessfulAuth] = useState(false)

	const validateToken = (token) => {
		fetchAuth()
		if(token === user.access_token){
			return true
		}
		return false
	}

	const encodePassword = (user) => {
		const userWithPasswordEncoded = user
		userWithPasswordEncoded.password = '******'
		return userWithPasswordEncoded
	}
      
	useEffect(() => {
		if(user){
			if(userName === user.username && password === user.password){
				const userToSave = encodePassword(user)
				console.log(userToSave)
				window.localStorage.setItem('loggedUser', JSON.stringify(userToSave))
				setSuccessfulAuth(true)
			}
		}
	}, [user])

	const fetchAuth = async () =>{
		try {
			const fetchingAuth = await getAuth()
			setUser(fetchingAuth)
		} catch (error) {
			console.error(error)
		}
	}
      
	return {userName, password, setUserName, setPassword, fetchAuth, successfulAuth, validateToken, setUser, user}
}
