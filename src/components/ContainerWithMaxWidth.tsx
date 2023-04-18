import styled from 'styled-components'

import { constants } from '@/constants'

export function ContainerWithMaxWidth({ children }) {
	return <Container>{children}</Container>
}

const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	max-width: ${constants.APP_MAXW}px;
	padding: 0 32px;

	display: flex;
	flex-direction: column;
	gap: 32px;
`
