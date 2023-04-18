import styled from 'styled-components'
import Head from 'next/head'

import { colors } from '@/ssot/colors'
import { Topbar } from './Topbar'

export function PageLayout({ children }) {
	return (
		<AppContainer>
			<Head>
				<title>Futball League</title>
				<meta
					name='description'
					content='futball league - The best app for football competitions'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
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
