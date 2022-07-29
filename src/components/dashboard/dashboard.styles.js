import styled from 'styled-components'

const DashBoardContainer = styled.div`
    width: 100%;
    height: 100vh;
`

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 50px;
  justify-content: space-between;
  height: 12vh;
`
const UserNameText = styled.span`
  font-size: 1.17rem;
`

const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

const UserIconContainer = styled.div`
  display: flex;
  background-color: ${({ isDashBoardPhoto }) => (isDashBoardPhoto ? 'rgba(255, 126, 53, 0.8)' : 'rgba(218, 78, 78, 1)')};
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
`

const UserImage = styled.img`
filter: ${({ isPhoto }) => (isPhoto ? 'none' : 'grayscale(1) invert(1)')};
border-radius: 50%;
`

const LogoutButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  text-decoration: none;
  cursor: pointer;
`
const Header = styled.h3`
  padding: 0 50px;
`

const GridContainer = styled.div`
  margin: 0 50px;
  align-self: center;
  display: grid;
  grid-template-columns: 40% 40% 20%;
  grid-row-gap: 1px;
  background-color: rgba(200, 200, 200, 1);
  border: 1px solid rgba(200, 200, 200, 1);
  div + div {
    border-left: 1px solid rgba(200, 200, 200, 1);
  }
`
const GridHeaderItem = styled.div`
  background-color: rgba(233, 233, 233, 1);
  text-align: center;
  padding: 15px 0;
  font-weight: 600;
`

const GridListItem = styled.div`
  background-color: rgba(255, 255, 255, 1);
  text-align: center;
  padding: 15px 0;
  font-weight: 500;
  display: flex;
  justify-content: center;
`

export {DashBoardContainer, NavBarContainer, UserNameText, LogoutContainer, UserIconContainer, UserImage, LogoutButton, Header, GridContainer, GridHeaderItem, GridListItem }