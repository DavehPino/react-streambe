import React from 'react'
import { DashBoardContainer } from '../components/dashboard/dashboard.styles'
import { DashBoardGrid } from '../components/dashboard/DashBoardGrid'
import { DashBoardHeader } from '../components/dashboard/DashBoardHeader'
import { NavBar } from '../components/dashboard/NavBar'
import { useUsers } from '../hooks/useUsers'

export const Dashboard = () => {
	const {loaded, users} = useUsers()
  
	return (
		<>
			{loaded ? (
				<DashBoardContainer >
					<NavBar/>
					<DashBoardHeader>Dashboard</DashBoardHeader>
					<DashBoardGrid users={users}/>
				</DashBoardContainer>
			) : null}
		</> )
}
