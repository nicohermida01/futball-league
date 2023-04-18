import _ from 'lodash'

import { PageTitle } from '@/components/PageTitle'
import { CompetitionNav } from '@/components/CompetitionNav'
import { ICupCompetitionPageProps } from '@/interfaces/competitionPage.interface'
import { getCompetition } from '@/services/footall_data'
import { ContainerColumn } from '@/styles/components/ContainerColumn'
import { CompetitionTable } from '@/components/CompetitionTable'
import { ContainerWithMaxWidth } from '@/components/ContainerWithMaxWidth'

export default function CupCompetition(props: ICupCompetitionPageProps) {
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
				{props.standings.map((standing, index) => (
					<CompetitionTable
						data={standing.table}
						title={_.replace(standing.group, '_', ' ')}
						key={index}
					/>
				))}
			</ContainerWithMaxWidth>
		</ContainerColumn>
	)
}

export async function getServerSideProps(context) {
	let props: ICupCompetitionPageProps

	const request = await getCompetition(context.params.code)
	if (request) props = request

	return { props }
}
