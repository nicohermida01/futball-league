import axios from 'axios'

export const getCompetitionsStandings = async () => {
  const response = await axios.get('https://api.football-data.org/v4/competitions/PL/standings', { headers: { 'X-Auth-Token': '952ee5c842aa4ccd89eaf9b30bc28d50' } })
  return response.data
}
