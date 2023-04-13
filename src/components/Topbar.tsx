import styled from 'styled-components'
import Link from 'next/link'

import { constants } from '@/constants'
import { AppLogo } from './icons/AppLogo'

export function Topbar() {
	return (
		<HeaderWrapper>
			<TopbarContainer>
				<Link href='/'>
					<AppLogo height={40} width={112} />
				</Link>
			</TopbarContainer>
		</HeaderWrapper>
	)
}

const HeaderWrapper = styled.div`
	width: 100%;
	background-color: #fff;
`

const TopbarContainer = styled.header`
	width: 100%;
	margin: 0 auto;
	max-width: ${constants.APP_MAXW}px;
	background-color: #fff;
	padding: 16px 32px;

	display: flex;
	align-items: center;
	justify-content: space-between;
`
