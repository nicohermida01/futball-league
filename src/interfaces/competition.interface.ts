export interface ICompetition {
	id: number
	code: string
	emblem: string // competition image url
	name: string
	area: {
		name: string // competition location
	}
}
