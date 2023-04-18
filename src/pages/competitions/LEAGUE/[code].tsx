import { CompetitionNav } from '@/components/CompetitionNav'
import { CompetitionTable } from '@/components/CompetitionTable'
import { ContainerWithMaxWidth } from '@/components/ContainerWithMaxWidth'
import { PageTitle } from '@/components/PageTitle'
import { ILeagueCompetitionPageProps } from '@/interfaces/competitionPage.interface'
import { getCompetition } from '@/services/footall_data'
import { ContainerColumn } from '@/styles/components/ContainerColumn'

export default function LeagueCompetition(props: ILeagueCompetitionPageProps) {
	return (
		<ContainerColumn>
			<div>
				<PageTitle
					title={props.competition.name}
					isForCompetition
					competitionImgSrc={props.competition.emblem}
					titleAux={props.area.name}
				/>
				<CompetitionNav />
			</div>

			<ContainerWithMaxWidth>
				<CompetitionTable data={props.table} />
			</ContainerWithMaxWidth>
		</ContainerColumn>
	)
}

export async function getServerSideProps(context) {
	let props: ILeagueCompetitionPageProps

	const request = await getCompetition(context.params.code)

	if (request) {
		const { standings, ...restOfRequest } = request
		props = {
			table: standings[0].table,
			...restOfRequest,
		}
	}

	return { props }
}
