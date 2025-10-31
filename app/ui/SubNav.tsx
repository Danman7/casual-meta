import { SubNavClient } from '@/app/ui/SubNavClient'
import { getRoutesFrom } from '@/lib/routes'

// Server component: fetches routes with fs and passes them to a client component for interactivity
export async function SubNav({ route }: { route: string }) {
  const items = getRoutesFrom(route)
  return <SubNavClient items={items} />
}
