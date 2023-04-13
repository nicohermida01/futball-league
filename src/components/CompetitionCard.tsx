import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export function CompetitionCard({ code, emblem: imgSrc, name, location }) {
	return (
		<StyledLink href={`/competitions/${code}`}>
			<CompetitionData>
				<CompetitionName>{name}</CompetitionName>
				<CompetitionLocation>{location}</CompetitionLocation>
			</CompetitionData>
			<CompetitionImageWrapper>
				<Image width={100} height={100} src={imgSrc} alt={name} />
			</CompetitionImageWrapper>
		</StyledLink>
	)
}

const StyledLink = styled(Link)`
	width: 100%;
	height: 100px;
	background-color: #fff;
	text-decoration: none;
	padding: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: all ease 0.4s;
	border-radius: 4px;

	&:hover {
		box-shadow: 0 2px 8px 3px rgba(0, 0, 0, 0.2);
	}
`

const CompetitionData = styled.div`
	width: 75%;
	text-align: center;
`

const CompetitionName = styled.h3`
	color: #000;
	font-size: 14px;
	text-transform: uppercase;
`

const CompetitionLocation = styled.span`
	color: rgba(0, 0, 0, 0.5);
	font-size: 12px;
`

const CompetitionImageWrapper = styled.div`
	height: 100%;
	width: 25%;
	margin: 16px;

	& img {
		width: 100%;
		height: 100%;
	}
`
