import Link from 'next/link'

import { getRouteTreeForPath } from '@/app/actions/getRouteTree'

interface SubPageNavProps {
  route: string
}

export const SubPageNav: React.FC<SubPageNavProps> = async ({ route }) => {
  const items = await getRouteTreeForPath(route)

  return (
    <>
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.title}
        </Link>
      ))}
    </>
  )
}
