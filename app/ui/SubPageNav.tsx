import Link from 'next/link'

import { getRouteTreeForPath } from '@/app/actions/getRouteTree'

interface SubPageNavProps {
  route: string
}

export const SubPageNav: React.FC<SubPageNavProps> = async ({ route }) => {
  const items = await getRouteTreeForPath(route)

  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  )
}
