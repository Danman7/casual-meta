import { TableColumn } from '@/app/ui/Table'

interface WoundRollRow {
  strengthVsToughness: string
  requiredRoll: string
}

export const woundRollColumns: TableColumn<WoundRollRow>[] = [
  {
    id: 'strengthVsToughness',
    header: 'Strength vs Toughness',
    accessor: (row) => row.strengthVsToughness,
  },
  {
    id: 'requiredRoll',
    header: 'Roll needed to wound (chance)',
    accessor: (row) => row.requiredRoll,
    align: 'center',
  },
]

export const woundRollRows: WoundRollRow[] = [
  {
    strengthVsToughness: 'Strength is at least double Toughness',
    requiredRoll: '2+ (5/6)',
  },
  {
    strengthVsToughness: 'Strength is higher than Toughness',
    requiredRoll: '3+ (2/3)',
  },
  {
    strengthVsToughness: 'Strength equals Toughness',
    requiredRoll: '4+ (1/2)',
  },
  {
    strengthVsToughness: 'Strength is lower than Toughness',
    requiredRoll: '5+ (1/3)',
  },
  {
    strengthVsToughness: 'Strength is half or less of Toughness',
    requiredRoll: '6+ (1/6)',
  },
]
