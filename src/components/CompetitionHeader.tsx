import Image from 'next/image'
import styled from 'styled-components'

import { colors } from '@/ssot/colors'

export function CompetitionHeader({ competitonName, competitionImg }) {
	return (
		<CompetitionHeaderContainer>
			<ImageWrapper>
				<Image
					src={competitionImg}
					alt={competitonName}
					width={100}
					height={100}
				/>
			</ImageWrapper>
			<TitleContainer>
				<TitleLabel>competición</TitleLabel>
				<Title>{competitonName}</Title>
			</TitleContainer>
		</CompetitionHeaderContainer>
	)
}

const CompetitionHeaderContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 16px;
`
const ImageWrapper = styled.div`
	width: 80px;
	height: 80px;
	background-color: #fff;
	border-radius: 50%;
	padding: 8px;

	& img {
		width: 100%;
		height: 100%;
	}
`

const TitleContainer = styled.div`
	text-transform: uppercase;
`

const Title = styled.h1`
	font-size: 30px;
	color: #fff;
`

const TitleLabel = styled.h3`
	font-size: 14px;
	color: ${colors.TEXT_AUX_GRAY};
`
