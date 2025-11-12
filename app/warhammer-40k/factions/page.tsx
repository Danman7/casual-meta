import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { PageTitle } from '@/app/ui/PageTitle'
import { SubPageNav } from '@/app/ui/SubPageNav'
import { generatePageMetadata } from '@/lib/metadata'

const pageTitle = 'Factions'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${pageTitle}`,
  'An index of all factions of consequence in Warhammer 40k.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle
        title={pageTitle}
        subtitle="To muster an army, one must first choose a faction."
      />

      <p>
        In this section we will look at every available faction for you to pick
        from. Here is the list:
      </p>

      <SubPageNav route={`${WH40K_BASE_URL}/factions`} />
    </article>
  )
}
