export interface ICompetition {
	id: number
	area: {
		name: string // competition location
	}
	name: string
	code: string
	type: 'CUP' | 'LEAGUE'
	emblem: string // competition image url
}
