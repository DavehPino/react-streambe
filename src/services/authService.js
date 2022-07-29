export const getAuth = async () => {
	const response = await fetch('https://www.mockachino.com/06c67c77-18c4-45/login')
	const userData = await response.json()
	const password = '123456'
	return {password, ...userData}
}