import styled from 'styled-components'

import { getCompetitionsStandings } from '@/services/competitions'
import { CompetitionHeader } from '@/components/CompetitionHeader'
import { StandingsTable } from '@/components/StandingsTable'

import type { TPosition } from '@/components/StandingsTable'

export interface ISeasonLeague {
	currentMatchday: number
	endDate: string
	startDate: string
	winner: string | null
}

interface ILeague {
	competition: {
		emblem: string
		name: string
	}
	season: ISeasonLeague
	standings: {
		table: TPosition[]
	}[]
}

interface IHomePageProps {
	data: ILeague
}

export default function Home(props: IHomePageProps) {
	return (
		<HomeContainer>
			hola ivan
			<CompetitionHeader
				competitonName={props.data.competition.name}
				competitionImg={props.data.competition.emblem}
			/>
			<StandingsTable
				data={props.data.standings[0].table}
				season={props.data.season}
			/>
		</HomeContainer>
	)
}

export async function getServerSideProps() {
	const data = await getCompetitionsStandings()

	return {
		props: { data },
	}
}

const HomeContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
`
