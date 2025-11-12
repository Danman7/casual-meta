import { HOMM3_BASE_URL, HOMM3_TITLE } from '@/app/constants'
import { BulletList } from '@/app/ui/BulletList'
import { PageTitle } from '@/app/ui/PageTitle'
import { SubPageNav } from '@/app/ui/SubPageNav'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  HOMM3_TITLE,
  'A repository of guides for Heroes of Might and Magic 3 and its expansions.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle
        title={HOMM3_TITLE}
        subtitle="Heroes of Might and Magic 3 is easily among the most beloved
        turn-based strategy games of all time."
      />

      <p>
        It is a 1999 fantasy classic, revered among players and modders, still
        widely played today. In an era where online play was nonexistent in many
        parts of the world, the simple yet genius hot-seat multiplayer thrived.
        Even if you haven’t played it, you likely have heard tales of many long
        afternoons and evenings, where people huddled together in front of a
        single CRT screen.
      </p>

      <p>In the following pages we will:</p>

      <BulletList
        icon="GiCastle"
        items={[
          'Focus on the multiplayer.',
          'Provide gameplay reference.',
          'Consolidate the community’s knowledge and experience.',
        ]}
      />

      <SubPageNav route={HOMM3_BASE_URL} />
    </article>
  )
}
