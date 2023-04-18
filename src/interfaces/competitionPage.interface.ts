export interface ICompetitionSeason {
	currentMatchday: number
	endDate: string
	startDate: string
	winner: string | null
}

export interface ICompetitionTableRow {
	draw: number // partidos empatados
	form: string // ultimos 5 partidos => 'W,W,W,D,L' donde W=win, D=draw, L=lost
	goalDifference: number // diferencia de goles
	goalsAgainst: number // goles en contra
	goalsFor: number // goles a favor
	lost: number // partidos perdidos
	playedGames: number
	points: number
	position: number
	team: {
		crest: string
		name: string
	}
	won: number // partidos ganados
}

export type CompetitionTable = ICompetitionTableRow[]

interface ICompetitionStanding {
	group: string
	table: CompetitionTable
}

interface ICompetitionCommonPageProps {
	area: {
		name: string
		flag: string // area flag image url
	}
	competition: {
		name: string
		emblem: string // competition image url
	}
}

export interface ICupCompetitionPageProps extends ICompetitionCommonPageProps {
	standings: ICompetitionStanding[]
}

export interface ILeagueCompetitionPageProps
	extends ICompetitionCommonPageProps {
	table: CompetitionTable
}
