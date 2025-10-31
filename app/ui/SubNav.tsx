import { SubNavClient } from '@/app/ui/SubNavClient'
import { getRoutesFrom } from '@/lib/routes'

export async function SubNav({ route }: { route: string }) {
  const items = getRoutesFrom(route)
  return <SubNavClient items={items} />
}
