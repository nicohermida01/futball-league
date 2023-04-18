import styled from 'styled-components'

import { constants } from '@/constants'
import { colors } from '@/ssot/colors'

export function CompetitionNav() {
	return (
		<Container>
			<Navbar>
				<ul>
					<NavItem active>Clasification</NavItem>
					<NavItem>Matches</NavItem>
					<NavItem>Top Scorers</NavItem>
				</ul>
			</Navbar>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	background-color: #fff;
`

const Navbar = styled.nav`
	width: 100%;
	max-width: ${constants.APP_MAXW}px;
	margin: 0 auto;
	padding: 0 32px;

	& ul {
		display: flex;
		gap: 16px;
		list-style-type: none;
	}
`

const NavItem = styled.li`
	cursor: pointer;
	padding-bottom: 16px;
	border-bottom-width: 2px;
	border-bottom-style: solid;
	border-bottom-color: ${props =>
		props.active ? colors.PRIMARY : 'transparent'};
`
