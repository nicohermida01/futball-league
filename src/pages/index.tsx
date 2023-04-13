import styled from 'styled-components'

import { getAllCompetitions } from '@/services/footall_data'
import { IHomePageProps } from '@/interfaces/homePage.interface'
import { CompetitionCard } from '@/components/CompetitionCard'

export default function Home(props: IHomePageProps) {
	return (
		<Container>
			{props.competitions.map(competition => (
				<CompetitionCard
					key={competition.id}
					code={competition.code}
					emblem={competition.emblem}
					name={competition.name}
					location={competition.area.name}
				/>
			))}
		</Container>
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

const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 16px;
`
