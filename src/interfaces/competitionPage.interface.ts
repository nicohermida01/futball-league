export interface ICompetitionSeason {
	currentMatchday: number
	endDate: string
	startDate: string
	winner: string | null
}

export interface ICompetitionPosition {
	position: number
	team: {
		crest: string
		name: string
	}
	playedGames: number
	won: number // partidos ganados
	draw: number // partidos empatados
	lost: number // partidos perdidos
	points: number
	goalsFor: number // goles a favor
	goalsAgainst: number // goles en contra
	goalDifference: number // diferencia de goles
	form: string // ultimos 5 partidos => 'W,W,W,D,L' donde W=win, D=draw, L=lost
}

export interface ICompetitionPageProps {
	competition: {
		emblem: string // competition image url
		name: string
	}
	season: ICompetitionSeason
	standings: {
		table: ICompetitionPosition[]
	}[]
}
