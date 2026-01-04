import { HOMM3_TITLE } from '@/app/constants'
import { BulletList } from '@/app/ui/BulletList'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  HOMM3_TITLE,
  'A repository of guides for Heroes of Might and Magic 3 and its expansions.',
)

export default async function Page() {
  return (
    <>
      <h1>{HOMM3_TITLE}</h1>

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
    </>
  )
}
