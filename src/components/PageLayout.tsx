import styled from 'styled-components'

import { colors } from '@/ssot/colors'
import { Topbar } from './Topbar'

export function PageLayout({ children }) {
	return (
		<AppContainer>
			<Topbar />
			<ChildrenContainer>{children}</ChildrenContainer>
		</AppContainer>
	)
}

const AppContainer = styled.div`
	width: 100%;
	min-height: 100%;
	overflow-x: hidden;
	background-color: ${colors.BODY_BG};
`

const ChildrenContainer = styled.main`
	width: 100%;
	min-height: calc(100vh - 72px);
	padding: 32px 0;
`
