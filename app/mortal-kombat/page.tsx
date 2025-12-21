import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { BulletList } from '@/app/ui/BulletList'
import { SubPageNav } from '@/app/ui/SubPageNav'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  MK_TITLE,
  'Mortal Kombat 1 or MK1 is the latest chapter in the long-running, celebrated fighting game series.',
)

export default async function Page() {
  return (
    <>
      <h1>{MK_TITLE}</h1>

      <p>
        Modern Mortal Kombat is about reading the intentions of your adversary
        and choosing the best course of action in response. Everything any
        character can throw at you can be countered and even punished. But
        things happen so fast!
      </p>

      <div className="text-lg my-8 space-y-4">
        <p>In these pages we will:</p>
        <BulletList
          icon="GiDeathSkull"
          items={[
            'Focus on Player vs Player (PvP)',
            'Give you the toolset to learn any character.',
            "Consolidate the community's knowledge.",
          ]}
        />
      </div>

      <SubPageNav route={MK_BASE_URL} />
    </>
  )
}
