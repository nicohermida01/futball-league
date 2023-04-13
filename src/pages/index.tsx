import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import { getAllCompetitions } from '@/services/footall_data'
import { colors } from '@/ssot/colors'
import { IHomePageProps } from '@/interfaces/homePage.interface'

export default function Home (props: IHomePageProps) {
  return (
    <Container>
      {props.competitions.map(competition => (
        <StyledLink
          href={`/competitions/${competition.code}`}
          key={competition.id}
        >
          <CompetitionImageWrapper>
            <Image
              width={100}
              height={100}
              src={competition.emblem}
              alt={competition.name}
            />
          </CompetitionImageWrapper>
          <CompetitionData>
            <CompetitionName>{competition.name}</CompetitionName>
            <CompetitionArea>{competition.area.name}</CompetitionArea>
          </CompetitionData>
        </StyledLink>
      ))}
    </Container>
  )
}

export async function getServerSideProps () {
  const props: IHomePageProps = {
    competitions: []
  }

  const request = await getAllCompetitions()
  if (request.competitions) props.competitions = request.competitions

  return { props }
}

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	justify-content: center;
`

const StyledLink = styled(Link)`
	width: 240px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 4px;
	overflow: hidden;
	text-decoration: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	text-align: center;
`

const CompetitionImageWrapper = styled.div`
	width: 120px;
	margin: 16px;
	margin-bottom: 32px;

	& img {
		width: 100%;
		height: 100%;
	}
`

const CompetitionData = styled.div`
	width: 100%;
	padding: 8px 16px;
	background-color: ${colors.COMPETITION_CARD_GRAY};
`

const CompetitionName = styled.h3`
	color: #000;
	font-size: 14px;
	text-transform: uppercase;
`

const CompetitionArea = styled.span`
	color: ${colors.ROW_TABLE_ALT};
	font-size: 12px;
`
