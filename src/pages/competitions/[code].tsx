import styled from 'styled-components'

import { CompetitionHeader } from '@/components/CompetitionHeader'
import { StandingsTable } from '@/components/StandingsTable'
import { ICompetitionPageProps } from '@/interfaces/competitionPage.interface'
import { getCompetition } from '@/services/footall_data'

export default function Competition(props: ICompetitionPageProps) {
	return (
		<Container>
			{props.competition && (
				<CompetitionHeader
					competitonName={props.competition.name}
					competitionImg={props.competition.emblem}
				/>
			)}

			{props.standings && props.season && (
				<StandingsTable data={props.standings[0].table} season={props.season} />
			)}
		</Container>
	)
}

export async function getServerSideProps(context) {
	let props: ICompetitionPageProps

	const request = await getCompetition(context.params.code)
	if (request) props = request

	return { props }
}

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
`
