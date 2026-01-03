import Link from 'next/link'

import { getRouteTreeForPath } from '@/app/actions/getRouteTree'

interface SubPageNavProps {
  route: string
}

export const SubPageNav: React.FC<SubPageNavProps> = async ({ route }) => {
  const items = await getRouteTreeForPath(route)

  return (
    <nav className="mt-4 flex flex-col" aria-labelledby="section-navigation">
      {items.map(({ href, title }) => (
        <Link className="py-2" key={href} href={href}>
          {title}
        </Link>
      ))}
    </nav>
  )
}
