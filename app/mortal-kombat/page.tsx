import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { Callout } from '@/app/ui/Callout'
import { PageTitle } from '@/app/ui/PageTitle'
import { SubPageNav } from '@/app/ui/SubPageNav'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  MK_TITLE,
  'Mortal Kombat 1 or MK1 is the latest chapter in the long-running, celebrated fighting game series.',
)

export default async function Page() {
  return (
    <>
      <PageTitle title={MK_TITLE} />

      <div className="mb-12">
        <p className="text-lg">
          Mortal Kombat (MK) refers to the popular franchise of fighting games
          best known for their fast-paced action and gory graphics. This section
          is dedicated to the modern series known as the NRS era.
        </p>

        <Callout>
          <p className="my-0! text-sm">
            NetherRealm Studios acquired all right to the Mortal Kombat
            trademark in 2009. This led to the creation of Mortal Kombat (MK9),
            Mortal Kombat X, Mortal Kombat 11 and Mortal Kombat 1.
          </p>
        </Callout>
      </div>

      <p>
        In its essence, Mortal Kombat is a duel to the death. Two players try to
        outsmart each other within the allotted time and space. Action unfolds
        rapidly which makes mastering it an arduous journey. Especially for new
        players. Nevertheless, it boils down to a number of simple mechanics
        which can be grasped.
      </p>

      <p className="text-lg italic">
        You may not have someone else’s reflexes, but you can understand how
        they make decisions.
      </p>

      <p>
        In the following pages we explain the quirks of the game as well as
        attempt to teach you about reading and conditioning the actions of your
        opponent. It’s as much about quick reaction as it is a mind game. We
        will focus on the online Player vs Player (PvP) aspect, giving you the
        tools to learn any character.
      </p>

      <h2>Contents</h2>

      <SubPageNav route={MK_BASE_URL} />
    </>
  )
}
