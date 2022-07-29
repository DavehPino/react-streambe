export const getUsers = async () => {
	const response = await fetch('https://www.mockachino.com/06c67c77-18c4-45/users')
	const data = await response.json()
	return data
}