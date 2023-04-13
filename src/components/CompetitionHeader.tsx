import Image from 'next/image'
import styled from 'styled-components'

import { colors } from '@/ssot/colors'

export function CompetitionHeader({ name, img, location }) {
	return (
		<Container>
			<ImageWrapper>
				<Image src={img} alt={name} width={100} height={100} />
			</ImageWrapper>
			<TitleContainer>
				<Title>{name}</Title>
				<TitleLabel>{location}</TitleLabel>
			</TitleContainer>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 16px;
`
const ImageWrapper = styled.div`
	width: 120px;
	height: 120px;
	background-color: #fff;
	padding: 16px;
	border-radius: 50%;

	& img {
		width: 100%;
		height: 100%;
	}
`

const TitleContainer = styled.div`
	text-transform: uppercase;
`

const Title = styled.h2`
	font-size: 32px;
	color: #000;
`

const TitleLabel = styled.h3`
	font-size: 14px;
	color: rgba(0, 0, 0, 0.4);
`
