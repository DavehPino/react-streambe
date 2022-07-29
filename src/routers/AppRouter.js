import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages/dashboard'
import { Login } from '../pages/login'
export const AppRouter = () => {

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route exact path="/dashboard" element={<Dashboard />} />
			</Routes>
		</Router>
	)
}
