import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export function CompetitionCard({ code, imgSrc, name, location, type }) {
	return (
		<StyledLink href={`/competitions/${type}/${code}`}>
			<CompetitionData>
				<CompetitionName>{name}</CompetitionName>
				<CompetitionLocation>{location}</CompetitionLocation>
			</CompetitionData>

			<ImageWrapper>
				<Image width={100} height={100} src={imgSrc} alt={name} />
			</ImageWrapper>
		</StyledLink>
	)
}

const StyledLink = styled(Link)`
	width: 100%;
	background-color: #fff;
	text-decoration: none;
	padding: 16px;
	display: flex;
	gap: 16px;
	transition: all ease 0.4s;
	border-radius: 4px;

	&:hover {
		box-shadow: 0 2px 8px 3px rgba(0, 0, 0, 0.2);
	}
`

const CompetitionData = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`

const CompetitionName = styled.h3`
	color: #000;
	font-size: 14px;
`

const CompetitionLocation = styled.span`
	color: rgba(0, 0, 0, 0.5);
	font-size: 12px;
`

const ImageWrapper = styled.div`
	height: 68px;
	width: max-content;

	& img {
		width: auto;
		height: 100%;
	}
`
