import { getRouteTreeForPath } from '@/app/actions/getRouteTree'
import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { SectionLayout } from '@/app/ui/SectionLayout'

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const items = await getRouteTreeForPath(MK_BASE_URL)

  return (
    <SectionLayout items={items} title={MK_TITLE} rootUrl={MK_BASE_URL}>
      {children}
    </SectionLayout>
  )
}
