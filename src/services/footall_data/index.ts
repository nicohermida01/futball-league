import { ICompetition } from '@/interfaces/competition.interface'
import axios from 'axios'

export const getCompetition = async (competitionCode: string): Promise<any> => {
	const response = await axios.get(
		`https://api.football-data.org/v4/competitions/${competitionCode}/standings`,
		{
			headers: { 'X-Auth-Token': '952ee5c842aa4ccd89eaf9b30bc28d50' },
		}
	)

	return response.data
}

export const getAllCompetitions = async (): Promise<{
	count: number
	competitions: ICompetition[]
}> => {
	const response = await axios.get(
		'https://api.football-data.org/v4/competitions',
		{
			headers: { 'X-Auth-Token': '952ee5c842aa4ccd89eaf9b30bc28d50' },
		}
	)

	return response.data
}
