import { useEffect, useState } from 'react'
import { getUsers } from '../services/clientService'

export const useUsers = () => {
	const [users, setUsers] = useState(null)
	const [loaded, setLoaded] = useState(false)
  
	const fetchUsers = async () =>{
		try {
			const fetchingUsers = await getUsers()
			setUsers(fetchingUsers)
		} catch (error) {
			console.error(error)
		}
	}
  
	useEffect(() => {
		fetchUsers()
	}, [])
  
	useEffect(() => {
		if(users){
			setLoaded(true)
		}  
	}, [users])

	return {loaded, users}
}
