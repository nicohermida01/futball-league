import { ICompetition } from '@/interfaces/competition.interface'
import axiosInstance from '../../../config/axiosConfig'

export const getCompetition = async (competitionCode: string): Promise<any> => {
  const response = await axiosInstance.get(
		`/competitions/${competitionCode}/standings`
  )

  return response.data
}

export const getAllCompetitions = async (): Promise<{
  count: number
  competitions: ICompetition[]
}> => {
  const response = await axiosInstance.get('/competitions')

  return response.data
}
