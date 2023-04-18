import Image from 'next/image'
import styled from 'styled-components'

import { constants } from '@/constants'

interface PageTitleProps {
	title: string
	isForCompetition?: boolean
	titleAux?: string
	competitionImgSrc?: string
}

export function PageTitle({
	title,
	isForCompetition,
	titleAux,
	competitionImgSrc,
}: PageTitleProps) {
	return (
		<Container>
			<HeaderWrapper>
				{isForCompetition ? (
					<>
						<CompetitionImgWrapper>
							<Image
								width={100}
								height={100}
								src={competitionImgSrc}
								alt={title}
							/>
						</CompetitionImgWrapper>
						<div>
							<TitleAux>{titleAux}</TitleAux>
							<Title>{title}</Title>
						</div>
					</>
				) : (
					<Title>{title}</Title>
				)}
			</HeaderWrapper>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	background-color: #fff;
`

const HeaderWrapper = styled.div`
	width: 100%;
	max-width: ${constants.APP_MAXW}px;
	margin: 0 auto;
	padding: 32px;

	display: flex;
	align-items: center;
	gap: 32px;
`

const Title = styled.h2`
	text-transform: uppercase;
	font-size: 28px;
`

const CompetitionImgWrapper = styled.div`
	height: 114px;
	width: 114px;
	padding: 16px;
	border-radius: 50%;
	border: 1px solid rgba(0, 0, 0, 0.1);

	& img {
		height: 100%;
		width: 100%;
	}
`

const TitleAux = styled.span`
	color: rgba(0, 0, 0, 0.4);
	font-size: 16px;
	text-transform: uppercase;
	font-weight: bold;
`
