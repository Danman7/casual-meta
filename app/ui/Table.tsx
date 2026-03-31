import type { ReactNode } from 'react'

type TableAlign = 'left' | 'center' | 'right'

export interface TableColumn<T> {
  id: string
  header: ReactNode
  accessor: (row: T) => ReactNode
  align?: TableAlign
}

const alignmentClassName: Record<TableAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

export const Table = <T,>({
  columns,
  data,
  emptyMessage = 'No rows',
}: {
  columns: TableColumn<T>[]
  data: T[]
  emptyMessage?: string
}) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse table-fixed">
      <thead>
        <tr className="border-b border-light">
          {columns.map((column) => {
            const align = column.align ?? 'left'

            return (
              <th
                key={column.id}
                className={`px-3 py-3 md:px-4 font-semibold bg-surface border-b border-light whitespace-normal wrap-break-word ${alignmentClassName[align]}`}
              >
                {column.header}
              </th>
            )
          })}
        </tr>
      </thead>

      <tbody>
        {data.length === 0 ? (
          <tr className="border-b border-light">
            <td
              className="px-3 py-2 md:px-4 whitespace-normal wrap-break-word"
              colSpan={columns.length}
            >
              {emptyMessage}
            </td>
          </tr>
        ) : (
          data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-light">
              {columns.map((column) => {
                const align = column.align ?? 'left'

                return (
                  <td
                    key={column.id}
                    className={`px-3 py-2 md:px-4 whitespace-normal wrap-break-word ${alignmentClassName[align]}`}
                  >
                    {column.accessor(row)}
                  </td>
                )
              })}
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
)
