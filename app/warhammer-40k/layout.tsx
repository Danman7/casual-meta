import { getRouteTreeForPath } from '@/app/actions/getRouteTree'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { SectionLayout } from '@/app/ui/SectionLayout'

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const items = await getRouteTreeForPath(WH40K_BASE_URL)

  return (
    <SectionLayout items={items} title={WH40K_TITLE} rootUrl={WH40K_BASE_URL}>
      {children}
    </SectionLayout>
  )
}
