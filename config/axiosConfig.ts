import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.football-data.org/v4'
})

axiosInstance.defaults.headers['X-Auth-Token'] =
	process.env.FOOTBAL_DATA_API_KEY

export default axiosInstance
