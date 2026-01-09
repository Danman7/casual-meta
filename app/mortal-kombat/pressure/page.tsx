import Link from 'next/link'

import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { Flavor } from '@/app/ui/Flavor'
import { PageTitle } from '@/app/ui/PageTitle'
import { Pill } from '@/app/ui/Pill'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 6

export const navTitle = 'Pressure'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'Mind games and conditioning in Mortal Kombat.',
)

export default async function Page() {
  return (
    <>
      <PageTitle title={navTitle} subtitle="Advanced concepts" />

      <Section>
        <Flavor>
          This page explains the many mind games and frame traps that go into
          converting a good <Link href={`${MK_BASE_URL}/neutral`}>Neutral</Link>{' '}
          position into actual damage.
        </Flavor>

        <p>
          As a result of experience, players have found ways to explain how the
          game works beyond solid concepts like frame data and hit-boxes. One
          such area is the division of a round into micro-states. The fight can
          be in a state of <em>Pressure</em> and that can evolve into a state of{' '}
          <em>Punish</em>. If neither apply, probably you are in the state of{' '}
          <em>Neutral.</em>
        </p>

        <p className="font-bold">
          Any move can be countered successfully provided you can react in time.
          Too bad everything happens so quickly.
        </p>

        <p>
          Mortal Kombat is about reading intentions. To manage with the fast
          pace of the game, players enter a state of flow. They scout and act
          according to how they predict their opponent will react. Here we will
          mention some approaches to throwing your opponent’s flow off balance.
        </p>
      </Section>

      <Section title="Mix-ups" id="mix-ups">
        <p>
          As you know, the standing position gives fighters the best mobility.
          That is why most of the time blocking high and staying on the move is
          a good choice. The idea of a mix-up is to break this specific rhythm.
        </p>

        <p>
          This is done by throwing low attacks into the mix of your offense. It
          will either catch them off-guard or force them to keep blocking low,
          which in turn limits their mobility. Then you add an overhead to your
          moves which force them to block high again. And to top it off, combine
          your lows and overheads with the occasional throw. If you vary the
          block types of your attacks your foe will have to spend more effort to
          defend properly.
        </p>

        <p>
          With this in mind, there are characters that are more effective at
          mix-ups than others. These are the ones with standing lows and
          overheads as they won’t require a jump-in or a duck. This limits their
          mobility less thus producing better pressure. There are characters
          that have not such moves and struggle more with optimal offense.
        </p>

        <h3 id="50/50s">50/50s</h3>

        <p>
          Some characters can throw both an overhead and a low attack at the
          same time in given scenarios. This makes it very difficult for the
          opponent to predict which one is coming and adjust their block stance.
          For example, they are right next to you, and you know their character
          has a standing overhead which means they don’t need to jump to do one.
          So, should you block high or prepare for a quick low poke? This is
          called a true 50/50 as it forces the defender to guess either one or
          the other.
        </p>

        <h3 id="shimmys">Shimmys</h3>

        <p>
          A Shimmy is a 50/50 that involves throws. Pressing up against a
          knocked down opponent can indicate an attempt to grab them. They can
          react either by attempting to tech the throw with a button press or
          crouching without blocking to make it miss. If you predict them to
          duck under it, doing a mid will catch them off-guard. If you expect a
          tech, back dash will make them whiff, which can be followed by an
          attack of your own.
        </p>

        <p>
          This is not a true 50/50 as it requires the attacker to also guess the
          defenders’ intentions. If you throw a mid into them teching you might
          get punched and backing away from a ducking opponent will not gain
          progress. It is more of a mind game.
        </p>
      </Section>

      <Section title="Conditioning" id="conditioning">
        <p>
          How can I make my opponent expect a certain action from me? Can I
          condition them into predicting my behavior incorrectly? Certainly!
          Conditioning is one of the building blocks of your offense and it can
          be trained.
        </p>

        <p>
          Every one of us has their own conduct when it comes to fighting games.
          Because of the speed of the game, both players try to constantly read
          each other’s intentions.
        </p>

        <p>
          When one of them spots the same behavior in the other party in the
          same situations they make a mental note. Are they always starting a
          round with a jump-in? Are they constantly blocking when I dash forward
          even when I’m some distance away? Are they punishing my slow
          projectile spam? How should I modify my attacks?
        </p>

        <p>
          Usually, you provoke these thoughts in your opponent with your natural
          habits. But a skilled player can provoke them on purpose. Provided you
          are knocked down, and you try an armored get-up twice you can
          condition your opponent to predict you will try the same a third time
          and block. But this time you throw them instead.
        </p>

        <p className="font-bold">Varying your attacks is important.</p>

        <h3 id="string-derail">String derail</h3>

        <p>
          One approach is to cut one of your strings short. Say your character
          has a standing 122 that ends with a slow punch or a 124 that goes into
          a prolonged kick. If you do these often enough when you approach your
          foe, they will get used to them. The best counter measure is to block
          through the last hit and counterattack. But what if you cut the string
          short and do a throw instead - 12 (or whatever) into a throw? This is
          a string derail and is a way to keep them guessing.
        </p>
      </Section>

      <Section
        title="Countering pressure and resetting"
        id="countering-pressure"
      >
        <h3 id="the-down-1">The low jab</h3>

        <p>
          Every character has access to a quick <Pill>Down 1</Pill> low risk
          attack. Is is very fast and difficult to be countered by a fast high
          punch. This infamous move can:
        </p>

        <ul className="list-disc list-inside">
          <li>Reset opponent's pressure.</li>
          <li>Steal your turn back.</li>
          <li>Interrupt high strings.</li>
        </ul>

        <p>The best counter is usually a low punch of your own.</p>
      </Section>
    </>
  )
}
