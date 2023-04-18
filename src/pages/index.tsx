import styled from 'styled-components'

import { getAllCompetitions } from '@/services/footall_data'

import { IHomePageProps } from '@/interfaces/homePage.interface'

import { CompetitionCard } from '@/components/CompetitionCard'
import { PageTitle } from '@/components/PageTitle'
import { ContainerWithMaxWidth } from '@/components/ContainerWithMaxWidth'

import { ContainerColumn } from '@/styles/components/ContainerColumn'

export default function Home(props: IHomePageProps) {
	return (
		<ContainerColumn>
			<PageTitle title='competitions' />
			<ContainerWithMaxWidth>
				<GridContainer>
					{props.competitions.map(competition => (
						<CompetitionCard
							key={competition.id}
							code={competition.code}
							imgSrc={competition.emblem}
							name={competition.name}
							location={competition.area.name}
							type={competition.type}
						/>
					))}
				</GridContainer>
			</ContainerWithMaxWidth>

			<PageTitle title='matches' />

			<ContainerWithMaxWidth>Coming Soon ...</ContainerWithMaxWidth>
		</ContainerColumn>
	)
}

export async function getServerSideProps() {
	const props: IHomePageProps = {
		competitions: [],
	}

	const request = await getAllCompetitions()
	if (request.competitions) props.competitions = request.competitions

	return { props }
}

const GridContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 16px;
`
