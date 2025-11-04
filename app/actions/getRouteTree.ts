'use server'

import { getRoutesFrom, type RouteItem } from '@/lib/routes'

export async function getRouteTreeForPath(
  pathname: string,
): Promise<RouteItem[]> {
  const route =
    pathname === '/' ? '/' : '/' + pathname.replace(/^\/+|\/+$/g, '')
  return getRoutesFrom(route)
}
