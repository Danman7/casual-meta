import { WH40K_TITLE } from '@/app/constants'
import { PageTitle } from '@/app/ui/PageTitle'
import { generatePageMetadata } from '@/lib/metadata'

const pageTitle = 'Space Marines Battleline Units'

export const navTitle = 'Battleline Units'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${pageTitle}`,
  'An overview of the Space Marines battleline infantry units.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle title={pageTitle} subtitle="" />

      <p>
        Battleline is a keyword appearing on some datasheets. A key trait of
        battleline infantry is that you can take twice as many units of the same
        name, compared to other units, depending on the mission you are playing.
        So for example if you are playing Only War or Crusade you will be
        allowed to take up to six battleline units of the same name instead of
        three.
      </p>
    </article>
  )
}
