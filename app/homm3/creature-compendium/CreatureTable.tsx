'use client'

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'

import creaturesData from '@/app/data/homm3/creatures.json'
import { FlexWrapper } from '@/app/ui/FlexWrapper'

interface Creature {
  name: string
  town: string
  level: number
  upgrade: string
  cost: number
  population: number
  health: number
  attack: number
  defense: number
  minDamage: number
  maxDamage: number
  speed: number
  movement: string
  size: number
  shots?: number
  specials?: string[]
}

export function CreatureTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [townFilter, setTownFilter] = useState<string>('all')
  const [levelFilter, setLevelFilter] = useState<string>('all')
  const [typeFilter, setTypeFilter] = useState<string>('all')

  const columns = useMemo<ColumnDef<Creature>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        cell: (info) => (
          <span className="font-semibold">{info.getValue() as string}</span>
        ),
      },
      {
        accessorKey: 'town',
        header: 'Town',
      },
      {
        accessorKey: 'level',
        header: 'Lvl',
        cell: (info) => (
          <span className="text-center">{info.getValue() as number}</span>
        ),
      },
      {
        accessorKey: 'upgrade',
        header: 'Type',
        cell: (info) => {
          const value = info.getValue() as string
          return <span>{value}</span>
        },
      },
      {
        accessorKey: 'cost',
        header: 'Cost',
      },
      {
        accessorKey: 'attack',
        header: 'ATK',
      },
      {
        accessorKey: 'defense',
        header: 'DEF',
      },
      {
        accessorKey: 'minDamage',
        header: 'Min DMG',
      },
      {
        accessorKey: 'maxDamage',
        header: 'Max DMG',
      },
      {
        accessorKey: 'health',
        header: 'HP',
      },
      {
        accessorKey: 'speed',
        header: 'SPD',
      },
      {
        accessorKey: 'movement',
        header: 'Movement',
      },
      {
        accessorKey: 'specials',
        header: 'Specials',
        enableSorting: false,
        cell: (info) => {
          const specials = info.getValue() as string[] | undefined
          if (!specials || specials.length === 0) return <span>-</span>
          return <span>{specials.join(', ')}</span>
        },
      },
    ],
    [],
  )

  const filteredData = useMemo(() => {
    let filtered = creaturesData

    if (townFilter !== 'all') {
      filtered = filtered.filter((creature) => creature.town === townFilter)
    }

    if (levelFilter !== 'all') {
      filtered = filtered.filter(
        (creature) => creature.level === parseInt(levelFilter),
      )
    }

    if (typeFilter !== 'all') {
      filtered = filtered.filter((creature) => creature.upgrade === typeFilter)
    }

    return filtered
  }, [townFilter, levelFilter, typeFilter])

  const table = useReactTable({
    data: filteredData as Creature[],
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  const towns = useMemo(
    () => [
      'all',
      ...Array.from(new Set(creaturesData.map((c) => c.town))).sort(),
    ],
    [],
  )

  const levels = useMemo(
    () => [
      'all',
      ...Array.from(new Set(creaturesData.map((c) => c.level))).sort(
        (a, b) => a - b,
      ),
    ],
    [],
  )

  const types = useMemo(() => ['all', 'Base', 'Upgraded'], [])

  // Calculate statistics for filtered data
  const stats = useMemo(() => {
    const count = filteredData.length

    if (count === 0) {
      return { averages: {}, totals: {} }
    }

    const numericFields = [
      'cost',
      'attack',
      'defense',
      'minDamage',
      'maxDamage',
      'health',
      'speed',
    ] as const

    const totals: Record<string, number> = {}
    const averages: Record<string, number> = {}

    numericFields.forEach((field) => {
      const sum = filteredData.reduce(
        (acc, creature) => acc + (creature[field] as number),
        0,
      )
      totals[field] = sum
      averages[field] = Math.round((sum / count) * 10) / 10 // One decimal place
    })

    return { averages, totals }
  }, [filteredData])

  return (
    <>
      <div className="mt-8 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        <div className="flex flex-col">
          <label htmlFor="town-filter" className="mb-2 font-semibold text-sm">
            Filter by Town:
          </label>
          <select
            id="town-filter"
            value={townFilter}
            onChange={(e) => setTownFilter(e.target.value)}
            className="px-3 py-2 border rounded bg-background text-foreground border-light"
          >
            {towns.map((town) => (
              <option key={town} value={town}>
                {town === 'all' ? 'All Towns' : town}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="level-filter" className="mb-2 font-semibold text-sm">
            Filter by Level:
          </label>
          <select
            id="level-filter"
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="px-3 py-2 border rounded bg-background text-foreground border-light"
          >
            {levels.map((level) => (
              <option key={level} value={level}>
                {level === 'all' ? 'All Levels' : `Level ${level}`}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="type-filter" className="mb-2 font-semibold text-sm">
            Filter by Type:
          </label>
          <select
            id="type-filter"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-2 border rounded bg-background text-foreground border-light"
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type === 'all' ? 'All Types' : type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto px-6 lg:w-screen lg:relative lg:left-1/2 lg:-ml-[50vw] lg:right-1/2 lg:-mr-[50vw]">
        <table className="w-full border-collapse min-w-max">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-light">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left text-sm font-semibold bg-surface cursor-pointer hover:bg-light/10"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <FlexWrapper>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted() as string] ?? null}
                    </FlexWrapper>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-light hover:bg-surface transition-colors"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2 text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-light bg-surface/50 font-semibold">
              <td className="px-4 py-2 text-sm">Average</td>
              <td className="px-4 py-2 text-sm">-</td>
              <td className="px-4 py-2 text-sm">-</td>
              <td className="px-4 py-2 text-sm">-</td>
              <td className="px-4 py-2 text-sm">
                {stats.averages.cost || '-'}
              </td>
              <td className="px-4 py-2 text-sm">
                {stats.averages.attack || '-'}
              </td>
              <td className="px-4 py-2 text-sm">
                {stats.averages.defense || '-'}
              </td>
              <td className="px-4 py-2 text-sm">
                {stats.averages.minDamage || '-'}
              </td>
              <td className="px-4 py-2 text-sm">
                {stats.averages.maxDamage || '-'}
              </td>
              <td className="px-4 py-2 text-sm">
                {stats.averages.health || '-'}
              </td>
              <td className="px-4 py-2 text-sm">
                {stats.averages.speed || '-'}
              </td>
              <td className="px-4 py-2 text-sm">-</td>
            </tr>
            <tr className="border-t border-light bg-surface font-semibold">
              <td className="px-4 py-2 text-sm">Total</td>
              <td className="px-4 py-2 text-sm">-</td>
              <td className="px-4 py-2 text-sm">-</td>
              <td className="px-4 py-2 text-sm">-</td>
              <td className="px-4 py-2 text-sm">{stats.totals.cost || '-'}</td>
              <td className="px-4 py-2 text-sm">
                {stats.totals.attack || '-'}
              </td>
              <td className="px-4 py-2 text-sm">
                {stats.totals.defense || '-'}
              </td>
              <td className="px-4 py-2 text-sm">
                {stats.totals.minDamage || '-'}
              </td>
              <td className="px-4 py-2 text-sm">
                {stats.totals.maxDamage || '-'}
              </td>
              <td className="px-4 py-2 text-sm">
                {stats.totals.health || '-'}
              </td>
              <td className="px-4 py-2 text-sm">{stats.totals.speed || '-'}</td>
              <td className="px-4 py-2 text-sm">-</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-4 text-sm text-light">
        Showing {table.getRowModel().rows.length} creatures
      </div>
    </>
  )
}
