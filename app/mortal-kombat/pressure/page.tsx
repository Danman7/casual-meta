import Link from 'next/link'

import { mkHref, mkMetadata, mkPage } from '@/app/siteMap'

const page = mkPage('pressure')

export const metadata = mkMetadata('pressure')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <div className="flavor">
          This page explains the many mind games and frame traps that go into
          converting a good <Link href={mkHref('neutral')}>Neutral</Link>{' '}
          position into actual damage.
        </div>

        <p>
          As a result of experience, players have found ways to explain how the
          game works beyond solid concepts like frame data and hit-boxes. One
          such area is the division of a round into micro-states. The fight can
          be in a state of <em>Pressure</em> and that can evolve into a state of{' '}
          <em>Punish</em>. If neither applies, you are probably in the state of{' '}
          <em>Neutral.</em>
        </p>

        <p className="font-bold">
          Any move can be countered successfully provided you can react in time.
          Too bad everything happens so quickly.
        </p>

        <p>
          Mortal Kombat is about reading intentions. To manage the fast pace of
          the game, players enter a state of flow. They scout and act according
          to how they predict their opponent will react. Here we will mention
          some approaches to throwing your opponent’s flow off balance.
        </p>
      </section>

      <section>
        <h2 id="mix-up">Mix-up</h2>
        <p>
          As you know, the standing position gives fighters the best mobility.
          That is why most of the time blocking high and staying on the move is
          a good choice. The idea of a mix-up is to break this specific rhythm.
        </p>

        <p>
          This is done by throwing low attacks into the mix of your offense. It
          will either catch them off-guard or force them to keep blocking low,
          which in turn limits their mobility. Then you add an overhead to your
          moves that force them to block high again. And to top it off, combine
          your lows and overheads with the occasional throw. If you vary the
          block types of your attacks, your foe will have to spend more effort
          to defend properly.
        </p>

        <p>
          With this in mind, there are characters that are more effective at
          mix-ups than others. These are the ones with standing lows and
          overheads as they won’t require a jump-in or a duck. This limits their
          mobility less, thus producing better pressure. There are characters
          that have no such moves and struggle more with optimal offense.
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

        <h3 id="shimmys">Shimmies</h3>

        <p>
          A shimmy is a 50/50 that involves throws. Pressing up against a
          knocked-down opponent can indicate an attempt to grab them. They can
          react either by attempting to tech the throw with a button press or
          crouching without blocking to make it miss. If you predict them to
          duck under it, doing a mid will catch them off-guard. If you expect a
          tech, back dash will make them whiff, which can be followed by an
          attack of your own.
        </p>

        <p>
          This is not a true 50/50, as it requires the attacker to also guess
          the defender’s intentions. If you throw a mid into them teching, you
          might get punched, and backing away from a ducking opponent will not
          gain progress. It is more of a mind game.
        </p>
      </section>

      <section>
        <h2 id="conditioning">Conditioning</h2>
        <p>
          How can I make my opponent expect a certain action from me? Can I
          condition them into predicting my behavior incorrectly? Certainly!
          Conditioning is one of the building blocks of your offense and it can
          be trained.
        </p>

        <p>
          Everyone has their own habits when it comes to fighting games. Because
          of the speed of the game, both players try to constantly read each
          other’s intentions.
        </p>

        <p>
          When one of them spots the same behavior in the other party in the
          same situations, they make a mental note. Are they always starting a
          round with a jump-in? Are they constantly blocking when I dash forward
          even when I’m some distance away? Are they punishing my slow
          projectile spam? How should I modify my attacks?
        </p>

        <p>
          Usually, you provoke these thoughts in your opponent with your natural
          habits. But a skilled player can provoke them on purpose. If you are
          knocked down and try an armored get-up twice, you can condition your
          opponent to predict you will try the same thing a third time and
          block. But this time you throw them instead.
        </p>

        <p className="font-bold">Varying your attacks is important.</p>

        <h3 id="stagger">Stagger (String derail)</h3>

        <p>
          One approach is to cut one of your strings short. Say your character
          has a standing 122 that ends with a slow punch or a 124 that goes into
          a prolonged kick. If you do these often enough when you approach your
          foe, they will get used to them. The best countermeasure is to block
          through the last hit and counterattack. But what if you cut the string
          short and do a throw instead - 12 (or whatever) into a throw? This is
          a string derail and is a way to keep them guessing.
        </p>
      </section>

      <section>
        <h2 id="countering-pressure">Countering pressure and resetting</h2>
        <h3 id="the-down-1">The low jab</h3>

        <p>
          Every character has access to a quick, low-risk{' '}
          <strong>Down 1</strong> attack. It is very fast and difficult to
          counter with a fast high punch. This infamous move can:
        </p>

        <ul>
          <li>Reset opponent's pressure</li>
          <li>Steal your turn back</li>
          <li>Interrupt high strings</li>
        </ul>

        <p>The best counter is usually a low punch of your own.</p>
      </section>
    </>
  )
}
