import type { TableColumn } from '@/app/ui/Table'

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

interface RangedWeaponProfileRow {
  weaponProfile: string
  examples: string
  stats: string
  role: string
}

export const rangedWeaponProfileColumns: TableColumn<RangedWeaponProfileRow>[] =
  [
    {
      id: 'weaponProfile',
      header: 'Weapon profile',
      accessor: (row) => row.weaponProfile,
    },
    {
      id: 'examples',
      header: 'Examples',
      accessor: (row) => row.examples,
    },
    {
      id: 'stats',
      header: 'Typical profile',
      accessor: (row) => row.stats,
    },
    {
      id: 'role',
      header: 'Role',
      accessor: (row) => row.role,
    },
  ]

export const rangedWeaponProfileRows: RangedWeaponProfileRow[] = [
  {
    weaponProfile: 'Chip Rifle',
    examples: 'Lasgun, Splinter rifle',
    stats: 'A1-2 S2-3 AP0 D1',
    role: '"Bottom-of-the-barrel" ranged weapons, carried by many GEQ squads.',
  },
  {
    weaponProfile: 'Basic Bolter',
    examples: 'Boltgun, shoota, pulse carbine variants',
    stats: 'A2, S4, AP0, D1',
    role: 'Higher S, better at anti-GEQ.',
  },
  {
    weaponProfile: 'Improved rifle',
    examples: 'Bolt rifle, ion blaster, shuriken/craftworld guns',
    stats: '18-30", A1-2, S4-5, AP-1/-2, D1',
    role: 'Has some AP, much better at anti-GEQ, viable against MEQ.',
  },
]
