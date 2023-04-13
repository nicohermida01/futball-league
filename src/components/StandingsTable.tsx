import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table'
import styled from 'styled-components'
import Image from 'next/image'

import { colors } from '@/ssot/colors'
import { getYear } from 'date-fns'
import { CheckIcon } from './icons/CheckIcon'
import { DashIcon } from './icons/DashIcon'
import { XIcon } from './icons/XIcon'
import {
	ICompetitionPosition,
	ICompetitionSeason,
} from '@/interfaces/competitionPage.interface'

const columnHelper = createColumnHelper<ICompetitionPosition>()

const columns = [
	columnHelper.accessor(row => row.team.name, {
		id: 'teamName',
		header: () => 'Club',
		cell: props => (
			<TeamWrapper>
				{props.row.original.position}
				<TeamLogoWrapper>
					<Image
						src={props.row.original.team.crest}
						alt={props.getValue()}
						height={100}
						width={100}
					/>
				</TeamLogoWrapper>
				{props.getValue()}
			</TeamWrapper>
		),
	}),
	columnHelper.accessor('playedGames', {
		header: () => 'PJ',
		cell: props => props.renderValue(),
	}),
	columnHelper.accessor('won', {
		header: () => 'G',
		cell: props => props.renderValue(),
	}),
	columnHelper.accessor('draw', {
		header: () => 'E',
		cell: props => props.renderValue(),
	}),
	columnHelper.accessor('lost', {
		header: () => 'P',
		cell: props => props.renderValue(),
	}),
	columnHelper.accessor('points', {
		header: () => 'Pts',
		cell: props => props.renderValue(),
	}),
	columnHelper.accessor('goalsFor', {
		header: () => 'GF',
		cell: props => props.renderValue(),
	}),
	columnHelper.accessor('goalsAgainst', {
		header: () => 'GC',
		cell: props => props.renderValue(),
	}),
	columnHelper.accessor('goalDifference', {
		header: () => 'DG',
		cell: props => props.renderValue(),
	}),
	columnHelper.accessor('form', {
		header: () => 'Últimos 5',
		cell: props => (
			<LastFiveWrapper>
				{props
					.getValue()
					.split(',')
					.map((char, index) => {
						if (char === 'W') {
							return <CheckIcon color={colors.SUCCESS} key={index} />
						}
						if (char === 'D') {
							return <DashIcon color={colors.DRAW_GRAY} key={index} />
						}
						if (char === 'L') return <XIcon color={colors.WRONG} key={index} />
					})}
			</LastFiveWrapper>
		),
	}),
]

interface TStandingsTableProps {
	data: ICompetitionPosition[]
	season: ICompetitionSeason
}

export function StandingsTable({ data, season }: TStandingsTableProps) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	})

	return (
		<Container>
			<TableHeaderContainer>
				<h3>
					{`Temporada ${
						getYear(new Date(season.startDate)) ===
						getYear(new Date(season.endDate))
							? getYear(new Date(season.startDate))
							: `${getYear(new Date(season.startDate))} -
							  ${getYear(new Date(season.endDate))}`
					}`}
				</h3>
			</TableHeaderContainer>
			<TableContainer>
				<StyledTable>
					<StyledThead>
						{table.getHeaderGroups().map(headerGroup => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map(header => (
									<StyledTh key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
											  )}
									</StyledTh>
								))}
							</tr>
						))}
					</StyledThead>
					<StyledTbody>
						{table.getRowModel().rows.map(row => {
							return (
								<StyledTr key={row.id}>
									{row.getVisibleCells().map(cell => {
										return (
											<StyledTd key={cell.id} col={cell.column.id}>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</StyledTd>
										)
									})}
								</StyledTr>
							)
						})}
					</StyledTbody>
				</StyledTable>
			</TableContainer>
		</Container>
	)
}

const TeamWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`

const TeamLogoWrapper = styled.div`
	width: 24px;
	height: 24px;

	& img {
		width: 100%;
		height: 100%;
	}
`

const LastFiveWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`

const TableHeaderContainer = styled.div`
	background-color: ${colors.PRIMARY};
	padding: 8px 16px;
	color: #fff;
	border-radius: 4px;

	& h3 {
		font-size: 16px;
	}
`

const TableContainer = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 8px;
	padding: 16px;
`

const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
`

const StyledThead = styled.thead`
	color: rgba(0, 0, 0, 0.4);
	text-transform: uppercase;
	font-size: 12px;
`

const StyledTh = styled.th`
	text-align: start;
	padding: 8px 16px;
`

const StyledTbody = styled.tbody`
	color: #000;
`

const StyledTr = styled.tr`
	&:nth-child(even) {
		background-color: rgba(0, 0, 0, 0.1);
	}
`

const StyledTd = styled.td`
	padding: 10px 16px;
	font-weight: ${props => (props.col === 'points' ? 'bold' : 'normal')};
`
