import { MK_TITLE } from '@/app/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 4

export const navTitle = 'Cancelling'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'How chaining moves into strings works.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1>{navTitle}</h1>
    </article>
  )
}
