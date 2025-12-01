import Image from 'next/image'
import { GiPunchBlast } from 'react-icons/gi'

import Scorpion from '@/app/assets/mk1/scorp_mk1.webp'
import spear from '@/app/assets/mk1/scorp_spear.webp'
import scorp2 from '@/app/assets/mk1/scorpion_2.webp'
import scorpb3 from '@/app/assets/mk1/scorpion_b3.webp'
import { MK1_TITLE } from '@/app/constants'
import { BulletList } from '@/app/ui/BulletList'
import { Callout } from '@/app/ui/Callout'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 8

export const navTitle = 'Scorpion'

export const metadata = generatePageMetadata(
  `${MK1_TITLE}: ${navTitle}`,
  'A breakdown of Scorpion in Mortal Kombat 1.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1>{navTitle}</h1>

      <div className="md:flex items-center gap-4">
        <Image
          className="max-h-72 object-cover object-[0%_0%]  md:w-1/2 md:max-h-full"
          src={Scorpion}
          alt="Scorpion in Mortal Kombat 1"
        />

        <p className="md:w-1/2">
          Scorpion in Mortal Kombat 1 is polarizing: some praise him, others
          find him flat or weak. Nevertheless, he remains a straightforward
          character frequently played at all levels. He has tools for fighting
          both up close and against zoning players who prefer distance. On his
          own, he performs best when reacting to the opponent - punishing and
          interrupting. For optimal offense he needs help from an appropriate
          Kameo partner.
        </p>
      </div>

      <h2>Should I play or skip Scorpion?</h2>
      <BulletList
        className="text-success"
        icon="GiDeathSkull"
        items={[
          'No stances or forms to manage.',
          'Spear controls space and sets up combos.',
          'Easy combos with straightforward extensions.',
          'The Spear, Flame-Port and Devouring Flame control the whole screen.',
          'The Blazing Charge, Back 3, Back 2 and the Spear are good mid-screen interruptions. ',
          'Can be paired with a lot of Kameos.',
        ]}
      />

      <BulletList
        className="text-warning"
        icon="GiDeathSkull"
        items={[
          'Low technicality leads to higher predictability.',
          'Skilled players can push your attack to the limit.',
        ]}
      />

      <BulletList
        className="text-error"
        icon="GiDeathSkull"
        items={[
          'Lacks a standing overhead.',
          'All standing low attacks are not cancellable. ',
        ]}
      />

      <h2>Main buttons</h2>

      <p>Here are the strings you should practice first.</p>

      <BulletList
        icon="FaRegCircleDot"
        items={[
          <>
            <strong>Standing 2</strong> is your primary poke - fast, safe,
            disjointed high with surprising reach.
          </>,
          <>
            <strong>Standing 21</strong> - extends the above into your main
            hit-confirm and combo starter.
          </>,
          <>
            <strong>Forward 32</strong> - your best launch and combo starter,
            albeit slower with shorter reach than standing 21.
          </>,
          <>
            <strong>Standing 12</strong> - fastest hit-confirm. Prefer only when
            speed is of the essence.
          </>,
          <>
            <strong>Back 2</strong> - best anti-air into a full combo option.
          </>,
          <>
            <strong>Back 3</strong> - very far reaching, mid-low attack. The
            first hit can be cancelled into any special or Kameo move.
          </>,
          <>
            <strong>Back Forward 1</strong> is the Spear - an excellent full
            screen check and combo extender. It is slow and unsafe. Use with
            caution.
          </>,
          <>
            <strong>Back Forward 2</strong> is the Charge - fast mid attack that
            covers good distance. Can start a combo only with the proper Kameos.
            Enhanced version has armor. It is a good wakeup reversal.
          </>,
          <>
            <strong>Down Back 2</strong> is the Twisted Kyo - your optimal combo
            ender.
          </>,
          <>
            <strong>Air Down Back 2 Enhanced</strong> is a key aerial combo
            extender. You need to launch them first - F32 jump airDB2ex.
          </>,
          <>
            <strong>Down Back 3</strong> is the Flame Port. It is a dedicated
            full screen punish. Can also extend combos. The Enhanced version
            opens doors to some mind games.
          </>,
          <>
            <strong>Back Forward 4</strong> is the Devouring Flame - a final
            full screen measure against players who like to block and keep their
            distance.
          </>,
        ]}
      />

      <h2>How do I play Neutral?</h2>

      <p>
        Scorpion lacks a true mix-up or frame advantage. Instead, he has simple
        moves for each distance and scenario.
      </p>

      <ImageWithCaption
        src={scorp2}
        alt="Scorpion's Standing 2 attack."
        caption="Scorpion's Standing 2 catches advancing Sub-Zero off-guard."
      />

      <p>
        First goal for new players: learn Standing 2’s sweet spot and keep them
        there. Confirm hits with Standing 21. If they block it, stop. If it
        connects, continue into Spear - 21 BF1. Don’t commit into a combo if
        they block the first two hits. They will have time to punish you.
      </p>

      <p>
        If they stay out of reach, skip Standing 2 and check them with Spear.
        Many players get comfortable at mid-range and won’t expect it.
      </p>

      <ImageWithCaption
        src={spear}
        alt="Scorpion's spear move."
        className="shadow-md"
        caption="The Spear can catch the other party all the way across the screen."
      />

      <p>
        Expect opponents to block, jump, or even teleport around your Spear. But
        because it is a high attack, some players will duck under it.{' '}
        <strong>The enhanced spear consumes a meter, but hits mid.</strong> It
        will connect with anybody on the ground, even while crouching.
      </p>

      <p>
        If they like to throw unsafe attacks block and go for F32. Launching
        them at the start of a combo opens a world of possibilities. Also, the
        move can be chained up to three times this way for some easy damage.
      </p>

      <p>
        If they keep knocking you down, don’t forget that your enhanced BF2 is
        armored.
      </p>

      <p>
        If your adversary does a jump-in, you can Back 2 them. Practice this
        against a dummy that does a forward jumping kick. The sweet spot can be
        a bit tricky. But if you manage to find it, you can connect a Spear into
        a full combo.{' '}
        <strong>
          The Back 2 shortcut cancels into the Spear without the need to press
          back twice - B2 F1.
        </strong>
      </p>

      <p>
        For those who back away and spam you from afar there is Flame Port. It
        is unsafe and predictable, but still a dedicated anti-zoning special.
        The trick is to time it with their projectiles. To practice record a Liu
        Kang backing away, throwing BF1 and blocking afterwards.
      </p>

      <p>
        <strong>
          If your opponent blocks your teleports regularly, mix it up with the
          enhanced version into a throw.
        </strong>{' '}
        This is a simple way to mess up their defense if they expect to get
        punched. If they counter punch your enhanced port before the throw, do a
        micro-duck into a punch - briefly tap down then 1.
      </p>

      <p>
        When you don’t feel confident with your teleport play, switch to
        checking them with the BF4 Devouring Flame.
      </p>

      <h2>Conditioning and baiting whiffs</h2>

      <p>
        Scorpion’s Back launches his Kunai for a mid-low disjointed attack. It
        is slow and unsafe but reaches very far. The threat of a low hit at such
        a distance makes your rival constantly expect either to low block or
        jump over it. You can condition them to jump forward expecting a Back 3
        where you didn’t execute one. Then you can punish them with your Back 2.
      </p>

      <ImageWithCaption
        src={scorpb3}
        alt="Scorpion's back 3 attack."
        className="shadow-md max-h-80 object-cover object-[0%_50%]"
        caption="Back 3 catches Sub-Zero at the distance of a jump plus a dash."
      />

      <Callout>
        <div className="text-base font-bold flex items-center gap-2">
          Back 3 Cancels
        </div>

        <p>
          The first Back 3 hit can be shortcut cancelled into a forward move.
          This opens a lot of possibilities.
        </p>

        <p>
          <strong>B3 F1</strong> cancels into Spear.
        </p>
        <p>
          <strong>B3 F2</strong> cancels into Dash.
        </p>

        <p>
          <strong>B3 exF4</strong> cancels into enhanced Devouring Flame -
          guaranteed damage chip resource, but unsafe.
        </p>

        <p>
          <strong>B3 exDB3</strong> cancels into Enhanced Teleport. This is an
          excellent way to force them into blocking, giving your teleport more
          freedom.
        </p>

        <p>
          As mentioned, Scorpion has a poor mix-up without Kameos. The B3 cancel
          is a good candidate for Kameo synergy.
        </p>
      </Callout>

      <p>
        You can also promote your opponent to dash forward if you throw a punch
        into empty air at medium distance. Often when they see a whiff they
        spring into action. You can use that to land a Spear. Just tap 1
        (quickest recovery) into BF1. This is cheap but legit tech.
      </p>

      <p>
        A more consistent close-range approach is to derail one of your normal
        strings. Standing 122 ends in an overhead that can be punished with an
        up block. Cut it short - 12 into a throw. Same thing with Forward 34. It
        is a decent mid-mid poke that doesn’t chain outside a dash or some Kameo
        moves. But if they keep expecting it you can do F3 into a throw.
      </p>

      <h2>What combos should I learn first?</h2>

      <p>
        As modular as Scorpion’s move set is, when playing online, execution
        will overcome damage. You already have the basics of footsie into
        punish.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> 21 BF1 33 DB2{' '}
        <span className="text-light">- meterless 21% </span>
      </p>

      <p>
        This is a fair beginners combo. The best damage-for-consistency however
        involves learning to juggle the opponent three times.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> F32 F32 F32 4 BF1 33 DB2{' '}
        <span className="text-light">- resourceless 36.5% damage </span>
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> F32 F32 J12 airDB2ex{' '}
        <span className="text-sm italic">small pause</span> 111 BF1 33 DB2{' '}
        <span className="text-light">- one bar 40.7% damage</span>
      </p>

      <p>
        These are your bread-and-butter routes. In general, 36-40% damage is
        more than enough. The difficulty with the latter one is to delay the 111
        until both of you are closer to the ground. If executed correctly they
        will bounce off the ground allowing for the follow up spear to connect.
      </p>

      <p>
        Now if you do land a spear early you still have the three F32s. Your
        combo ender though must modify as you don't have the re-stand anymore.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> 21 BF1 F32 F32 F32 F34 BF2{' '}
        <span className="text-light">- resourceless 34.2% damage </span>
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> 21 BF1 F32 F32 J12 airDB2ex{' '}
        <span className="text-sm italic">small pause</span> 111 airDB2{' '}
        <span className="text-light"> - one bar 37.7% damage</span>
      </p>

      <h2>Extending via air Flame-Port</h2>

      <p>
        You can expand combos with Scorpion’s teleport. Nevertheless, it is much
        harder and isn't necessarily worth the effort.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> J3 airDB3{' '}
        <span className="text-sm italic">land</span> B2 F2{' '}
        <span className="text-light"> - resourceless 21.7% damage</span>
      </p>

      <p>
        If your rival is standing, the teleport must be very close to the
        ground. The timing of the kick and the land into a B2 is demanding. If
        they are not on the ground, you can only start a combo via an enhanced
        air teleport.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> F32 J12 airDB3ex J13{' '}
        <span className="text-sm italic">land</span> BF1 33 DB3{' '}
        <span className="text-light"> - one bar 33.4% damage</span>
      </p>

      <p>
        After you try this one you will feel the weird timing with the enhanced
        teleport into the 13. Often the teleport will simply miss.
      </p>

      <p>
        What can be effective is an enhanced air teleport from a distance. Most
        players don’t expect to be hit by a foe jumping away from them. To make
        the damage notable, however, you will need a challenging sequence.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> airDB3ex J3{' '}
        <span className="text-sm italic">land</span> BF1 F32 F32 F34 BF2{' '}
        <span className="text-light"> - one bar 30.8% damage</span>
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" /> exJDB3 J3 DB3{' '}
        <span className="text-sm italic">land</span> F32 F32 4 BF1 33 DB2{' '}
        <span className="text-light">for 41.1% one meter damage</span>
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" /> exJDB3 J3 DB3{' '}
        <span className="text-sm italic">land</span> 4 BF1 F32 J12 exJDB2{' '}
        <span className="text-sm italic">small pause</span> J111 JDB2{' '}
        <span className="text-light">for 44.9% two meter damage</span>
      </p>

      <h2>Corner combos</h2>

      <p>
        This is where you can spike the damage. The regular standing 4 kick is
        not very impressive, but it scales wonderfully. If you practice
        launching an opponent in the corner with a single F32 and hitting them
        as high as possible with 4, you can chain two of these for some very
        good damage.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" />
        F32 4 4 BF1 F32 J12 airDB2ex{' '}
        <span className="text-sm italic">small pause</span> J111 JDB2
        <span className="text-light"> - one bar 44.6% damage</span>
      </p>

      <p>
        The second 4 is kind of demanding, so don’t worry if you do only one -
        the same combo will still do over 40% damage.
      </p>

      <p>
        If you are about to win the round, and you feel confident, you can spice
        the above further with some tight timings.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" />
        F32 4 4 BF1 F32 J12 airDB2ex{' '}
        <span className="text-sm italic">small pause</span> J111{' '}
        <span className="text-light">land</span> B2 BF4ex
        <span className="text-light">
          {' '}
          for a whooping 50.2% one meter damage
        </span>
      </p>

      <p>
        Yes, the enhanced Devouring Flame is guaranteed damage, but if they
        survive, they also get a guaranteed wakeup punish. You cannot recover in
        time.
      </p>

      <h2>Advanced Tech</h2>

      <h3>Enhanced Flame-Port jail</h3>

      <p>
        This is not beginner level tech. A lot of the corner combos end in J111
        into something else. If you end it with an enhanced air teleport into a
        kick you will jail your opponent. If they get up and press any button
        other than block, they will get hit. If done correctly, they will spin
        around trying to attack you as you come from the corner and you will get
        a free hit, even break armor. It’s inconsistent. Don’t expect it to work
        every time.
      </p>
    </article>
  )
}
