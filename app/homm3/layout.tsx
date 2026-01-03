import { getRouteTreeForPath } from '@/app/actions/getRouteTree'
import { HOMM3_BASE_URL, HOMM3_TITLE } from '@/app/constants'
import { SectionLayout } from '@/app/ui/SectionLayout'

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const items = await getRouteTreeForPath(HOMM3_BASE_URL)

  return (
    <SectionLayout items={items} title={HOMM3_TITLE} rootUrl={HOMM3_BASE_URL}>
      {children}
    </SectionLayout>
  )
}
